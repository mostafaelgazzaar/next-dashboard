import { QueryResult, sql } from "@vercel/postgres";
import { User, UserPerformance } from "@/app/lib/definitions";
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
