"use server";
import { QueryResult, sql } from "@vercel/postgres";
import {
  ModuleResult,
  Pdf,
  UserModules,
  UserPerformance,
  UserTestAttempts,
} from "@/app/lib/definitions";
import { State } from "@/app/lib/actions";

const PASS_PERCENTAGE = 55;

export async function addLike(user_id: string, module_id: number) {
  try {
    await sql`
    update user_modules
    set added_likes=true
    where user_id=${user_id} AND module_id=${module_id}`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}
export async function addDislike(user_id: string, module_id: number) {
  try {
    await sql<UserModules>`
                update user_modules
                 set added_dislike =true
                  where user_id = ${user_id} AND module_id = ${module_id}
            `;
    await handleOpenNextModule(user_id, module_id);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}

export async function addComment(prevState: State, formData: FormData) {
  const moduleId = Number(formData?.get("moduleId"));
  const userId = formData.get("userId")?.toString();
  const comment = formData.get("comment")?.toString();
  await sql<UserModules>`
  UPDATE user_modules SET added_comments =${comment}  WHERE user_id = ${userId} AND module_id = ${moduleId}
`;
  const { percentage } = await checkUserCompletion(userId, moduleId);
  if (percentage >= PASS_PERCENTAGE) {
    let nextModule = moduleId + 1;
    if (nextModule > 5) return;
    await sql` 
insert into user_modules (user_id, module_id, added_likes, added_comments, completed)
  values (${userId}, ${nextModule}, false, null , false)`;
  }
}

export async function updateExamResult(prevState: State, formData: FormData) {
  try {
    if (formData.get("score") === null) return;
    const score = Number(formData?.get("score"));
    const moduleId = Number(formData?.get("moduleId"));
    const userId = formData.get("userId")?.toString();
    const testAttempt = Number(formData?.get("testAttempt"));
    const averageScore = Number(formData?.get("averageScore"));
    let attemptsCount;
    const userTestAttempts = await getUserTestTempts(
      userId?.toString(),
      moduleId ? +moduleId : null,
    );

    //get module result
    const moduleResult = await sql<ModuleResult>`
    select * from module_results where user_id = ${userId} AND module_id = ${moduleId}`;
    if (moduleResult.rows.length > 0) {
      await sql<UserTestAttempts>`
        UPDATE module_results SET score = ${score} WHERE user_id = ${userId} AND module_id = ${moduleId}`;
    } else {
      await sql`
            insert into module_results (user_id, module_id, score) values (${userId}, ${moduleId}, ${score})`;
    }

    // update user attempts count
    if (userTestAttempts) {
      attemptsCount = userTestAttempts.attempts_count + 1;
    } else {
      attemptsCount = 1;
    }
    if (userTestAttempts) {
      await sql<UserTestAttempts>`
                UPDATE test_attempts SET score = ${score} , attempts_count = ${attemptsCount} 
                WHERE user_id = ${userId} AND module_id = ${moduleId}
            `;
    } else {
      await sql<UserTestAttempts>`
                INSERT INTO test_attempts (user_id, module_id,attempts_count, score)
                 VALUES (${userId}, ${moduleId},${attemptsCount}, ${score})
            `;
    }
    const { percentage } = await checkUserCompletion(userId, moduleId);
    if (percentage >= PASS_PERCENTAGE) {
      let nextModule = moduleId + 1;
      if (nextModule > 5) return;
      await sql` 
        insert into user_modules (user_id, module_id, added_likes, added_comments, completed)
                values (${userId}, ${moduleId}, false, null , false)`;
    }
    const newAttemptsCount = testAttempt + 1;
    const averageTestScore = (averageScore + score) / newAttemptsCount;
    await sql<UserPerformance>`
                UPDATE user_performance SET test_attempts_count = ${newAttemptsCount}, average_test_score = ${averageTestScore}
                WHERE user_id = ${userId}
            `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}

export async function postPlayedDuration(duration: number, userId: string) {
  try {
    const data = await sql`
                    UPDATE user_performance SET time_watching_videos_seconds = ${duration} WHERE user_id = ${userId}
                `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}
export async function updateModuleWatchedDuration(
  duration: number,
  moduleId: number,
  userId: string,
  totalDuration: number,
) {
  try {
    await sql`
                 UPDATE user_modules SET watched_duration = ${duration} WHERE user_id = ${userId} AND module_id = ${moduleId}
                `;

    const durationCheckPoint = totalDuration / 2;
    if (duration >= durationCheckPoint) {
      const { percentage } = await checkUserCompletion(userId, moduleId);
      if (percentage >= PASS_PERCENTAGE) {
        let nextModule = moduleId + 1;
        if (nextModule > 5) return;
        await sql` 
        insert into user_modules (user_id, module_id, added_likes, added_comments, completed)
                values (${userId}, ${moduleId}, false, null , false)`;
      }
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}
export async function getUserTestTempts(
  user_id: string | undefined,
  module_id: number | null,
) {
  if (!user_id || !module_id) return null;
  const data = await sql<UserTestAttempts>`
                SELECT * FROM test_attempts WHERE user_id = ${user_id} AND module_id = ${module_id}
            `;
  return data.rows[0];
}

export async function checkUserCompletion(
  user_id: string | undefined,
  module_id: number,
) {
  try {
    let percentage = 0;
    const userPdfQueryResult: QueryResult<Pdf> = await sql`
        select * from pdfs where user_id = ${user_id} AND module_id = ${module_id}`;

    const userModulesQueryResult: QueryResult<UserModules> = await sql`
    select * from user_modules where user_id = ${user_id} AND  module_id = ${module_id}`;

    const moduleResultsQueryResult: QueryResult<ModuleResult> = await sql`
    select * from module_results
     where user_id = ${user_id} AND module_id = ${module_id}`;

    const moduleData = await sql`
    select duration from modules where id = ${module_id}`;

    const userModules = userModulesQueryResult.rows[0];
    const userPdf = userPdfQueryResult.rows[0];
    const moduleResult = moduleResultsQueryResult.rows[0];
    const moduleDuration = moduleData.rows[0].duration;

    const addedLikes = userModules?.added_likes || false;
    const addedDislikes = userModules?.added_dislike || false;
    const addedPdf = !!userPdf;
    const addedComments = userModules?.added_comments || "";
    const moduleResultScore = moduleResult?.score || 0;
    const watchedDuration = userModules?.watched_duration || 0;

    if (watchedDuration >= moduleDuration / 2) {
      percentage += 20;
    }
    if (addedLikes || addedDislikes) percentage += 20;
    if (addedPdf) percentage += 20;
    if (addedComments) percentage += 20;
    if (moduleResultScore >= 3) percentage += 20;

    return {
      percentage,
      addedLikes,
      addedPdf,
      addedComments,
      moduleResultScore,
      watchedDuration,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}

export async function getUserModulesScore(user_id: string) {
  try {
    const data = await sql`
  select module_id,score from module_results where user_id = ${user_id}`;
    return data.rows;
  } catch (error) {
    throw new Error(`Failed to fetch from database: ${error}`);
  }
}

export async function handleOpenNextModule(userId: string, moduleId: number) {
  try {
    const { percentage } = await checkUserCompletion(userId, moduleId);

    if (percentage >= PASS_PERCENTAGE) {
      let nextModule = moduleId + 1;
      if (nextModule > 5) return;
      await sql`insert into
        user_modules(user_id, module_id, added_likes, added_comments, completed)
        values(${userId}, ${nextModule}, false, null , false)`;

      await completeModule(userId, moduleId);
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}

export async function completeModule(userId: string, moduleId: number) {
  try {
    await sql`update user_modules
        set completed=true
        where user_id = ${userId} AND module_id=${moduleId}`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}

export async function updateInteractionCount(
  userId: string,
  moduleId: number,
  count: number,
) {
  try {
    await sql`update user_performance
        set interactions_count=${count}
        where user_id = ${userId}`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}
