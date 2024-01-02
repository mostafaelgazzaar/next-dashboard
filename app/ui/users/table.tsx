import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { filteredUsers } from "@/app/lib/data/dashboard-data";
import Link from "next/link";

export default async function UsersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const users = await filteredUsers(query, currentPage);

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        الطللاب
      </h1>
      <Search placeholder="Search users..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {users?.map((user) => (
                  <div
                    key={user.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div></div>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-5 font-medium sm:pl-6 text-start"
                    >
                      الاسم
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-5 font-medium text-start"
                    >
                      البريد الالكتروني
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-5 font-medium text-start"
                    >
                      البيئة
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-5 font-medium text-start"
                    >
                      الدور
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {users.map((user) => (
                    <tr key={user.id} className="group">
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        <Link href={`/dashboard/customers/${user.id}`}>
                          <p className="underline"> {user.name}</p>
                        </Link>
                      </td>
                      <td className="whitespace-nowrap bg-white px-3 py-5 text-sm">
                        {user.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-3 py-5 text-sm">
                        {user.env}
                      </td>
                      <td className="whitespace-nowrap bg-white px-3 py-5 text-sm">
                        {user.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
