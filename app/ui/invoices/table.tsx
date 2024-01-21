import { formatDateToLocal } from "@/app/lib/utils";
import { getUserWithPdf } from "@/app/lib/data/modules-data";
import { ArrowDownCircleIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

export default async function InvoicesTable({
  query,
  moduleId,
  currentPage,
}: {
  query: string;
  moduleId: number;
  currentPage: number;
}) {
  const pdfs = await getUserWithPdf(moduleId, currentPage, query);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {pdfs?.map((user) => (
              <div
                key={user.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{user.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  اسم الطالب
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  البريد الالكتروني
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  التاريخ
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  النشاط
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {pdfs?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{user.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{user.email}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(user?.pdf?.timestamp, "eg-EG")}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-center ml-3">
                    {!!user?.pdf?.path && (
                      <span className="">
                        <CheckBadgeIcon className="w-5 h-5 text-green-500" />
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-right">
                    <a
                      href={`${user?.pdf?.path}`}
                      download={user.name.replace(".", "_")}
                    >
                      <ArrowDownCircleIcon className="w-5 h-5 text-blue-500" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
