import { sql } from "@vercel/postgres";
import {
  Pdf,
  User,
  UserModules,
  Module,
  UsersWithUserModules,
} from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/dist/server/web/spec-extension/unstable-no-store";

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
export async function fetchModuleById(id: number) {
  try {
    const data = await sql<Module>`
            SELECT * FROM modules WHERE id = ${id}
        `;
    return data.rows[0];
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

export async function getUserWithPdf(
  moduleId: number,
  currentPage: number,
  query: string,
) {
  try {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    if (typeof moduleId !== "number") {
      throw new Error("Invalid moduleId. Please provide a valid moduleId.");
    }
    const pdfs = await sql<Pdf>`
            SELECT * FROM pdfs WHERE module_id = ${moduleId}
          OFFSET ${offset}   LIMIT ${ITEMS_PER_PAGE} `;

    const usersIds = pdfs.rows.map((pdf) => pdf.user_id);
    if (usersIds.length === 0) return [] as User[];
    let users: User[] = [];
    for (let i = 0; i < usersIds.length; i++) {
      const user = await sql<User>`
            SELECT * FROM users WHERE id = ${usersIds[i]}
        `;
      users.push(user.rows[0]);
    }
    if (query) {
      users = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase()),
      );
    }

    return users.map((user) => ({
      ...user,
      pdf: pdfs.rows.find((pdf) => pdf.user_id === user.id),
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}

export async function getUserWithUSerModules(
  moduleId: number,
  currentPage: number,
  query: string,
): Promise<UsersWithUserModules[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<UserModules>`
            SELECT * FROM user_modules WHERE module_id = ${moduleId} LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
    const usersIds = data.rows.map((userModule) => userModule.user_id);
    if (usersIds.length === 0) return [] as UsersWithUserModules[];
    let users: User[] = [];
    for (let i = 0; i < usersIds.length; i++) {
      const user = await sql<User>`
            SELECT * FROM users WHERE id = ${usersIds[i]}
        `;
      users.push(user.rows[0]);
    }
    if (query) {
      users = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase()),
      );
    }
    return users.map((user) => {
      return {
        ...user,
        userModule: data.rows.find(
          (userModule) => userModule.user_id === user.id,
        ),
      } as UsersWithUserModules;
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}
export async function usersWithPdfPages(moduleId: number, query: string) {
  // Check if moduleId is a number
  noStore();
  if (typeof moduleId !== "number") {
    throw new Error("Invalid module_id. Please provide a valid module_id.");
  }

  const count = await sql`
    select count(*) from pdfs where module_id = ${moduleId} 
  `;

  const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
  return totalPages;
}

export async function usersCount() {
  try {
    noStore();
    const count = await sql`SELECT COUNT(*) FROM users`;
    return Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to card data.");
  }
}
export async function getUserModulePdf(
  user_id: string,
  module_id: number,
): Promise<Pdf> {
  try {
    const data = await sql<Pdf>`
            SELECT * FROM pdfs WHERE user_id = ${user_id} AND module_id = ${module_id}
        `;
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the modules.");
  }
}
