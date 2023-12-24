import { sql } from "@vercel/postgres";
import { Pdf, User, UserModules } from "@/app/lib/definitions";

const ITEMS_PER_PAGE = 6;
export async function fetchModules() {
  try {
    const data = await sql<Module>`SELECT * FROM modules order by id asc`;

    const modules = data.rows.map((module) => ({
      ...module,
    }));
    return modules;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}

export async function fetchUsersModules(user_id: string) {
  try {
    const data = await sql<UserModules>`
            SELECT * FROM user_modules WHERE user_id = ${user_id}
        `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}

export async function getUserWithPdf(module_id: number, currentPage: number) {
  try {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    const pdfs = await sql<Pdf>`
            SELECT * FROM pdfs WHERE module_id = ${module_id}
             LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}        `;
    const usersIds = pdfs.rows.map((pdf) => pdf.user_id);
    if (usersIds.length === 0) return [] as User[];
    const usersJoins = usersIds.join(",");
    const users = await sql<User>`
            SELECT * FROM users WHERE id IN (${usersJoins})
        `;

    return users.rows.map((user) => ({
      ...user,
      pdf: pdfs.rows.find((pdf) => pdf.user_id === user.id),
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}
export async function usersWithPdfPages(moduleId: number) {
  const count = await sql`
    select count(*) from pdfs where module_id = ${moduleId}
 `;
  const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
  return totalPages;
}
export type Module = {
  id: string;
  video: string;
  title: string;
  description: string;
  questions: string; // Assuming questions is stored as a JSON string in the database
};
