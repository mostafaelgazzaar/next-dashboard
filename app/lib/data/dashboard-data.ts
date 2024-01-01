import { QueryResult, sql } from "@vercel/postgres";
import {
  Module,
  ModuleStatistics,
  User,
  UserPerformance,
} from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 6;
export async function getUserPerformance(
  user_id?: string,
): Promise<UserPerformance> {
  const rows: QueryResult<UserPerformance> = await sql`
    SELECT * FROM user_performance WHERE user_id = ${user_id}`;

  return rows.rows[0];
}

export async function getUsers() {
  noStore();
  const rows: QueryResult<User> = await sql`
        SELECT * FROM users`;

  return rows.rows;
}

export async function filteredUsers(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  noStore();
  const rows: QueryResult<User> = await sql`
            SELECT * FROM users WHERE
            users.name ILIKE ${`%${query}%`} OR
            users.email ILIKE ${`%${query}%`}
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

  return rows.rows;
}

export async function getModulesStatistics() {
  const rows: QueryResult<ModuleStatistics> = await sql`
        select count(user_id) as count,module_id,completed from user_modules
        group by module_id,completed`;

  const modulesStats = rows.rows;
  const modules: QueryResult<Module> =
    await sql`select id,title,video from modules order by id asc`;
  const modulesData = modules.rows;
  return modulesData.map((module) => {
    const completed = modulesStats.find(
      (moduleStats) =>
        moduleStats.module_id === module.id && moduleStats.completed,
    );
    const notCompleted = modulesStats.find(
      (moduleStats) =>
        moduleStats.module_id === module.id && !moduleStats.completed,
    );

    return {
      ...module,
      completed: completed?.count ?? 0,
      notCompleted: notCompleted?.count ?? 0,
    };
  });
}
