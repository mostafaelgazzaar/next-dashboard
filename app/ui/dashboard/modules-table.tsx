import { getModulesStatistics } from "@/app/lib/data/dashboard-data";

export default async function ModulesTable() {
  const modulesStatistcs = await getModulesStatistics();
  return (
    <section className="items-center lg:flex  font-poppins dark:bg-gray-800  ">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="pt-2 rounded shadow bg-white dark:bg-gray-900">
          <div className="flex px-6 pb-4 border-b dark:border-gray-700">
            <h2 className="text-xl font-bold dark:text-gray-400">الموديلات</h2>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-md font-medium tracking-wide text-right text-gray-500 uppercase border-b dark:border-gray-700 dark:text-gray-400">
                  <th className="px-6 py-3 ">اسم الموديول</th>
                  <th className="px-6 py-3 text-center"> الفيديو</th>
                  <th className="px-6 py-3 text-center">عدد اللذين اكملو </th>
                  <th className="px-6 py-3 text-center">عدد اللذين لم ينهو</th>
                </tr>
              </thead>
              <tbody>
                {modulesStatistcs.map((module) => (
                  <tr
                    key={module.id}
                    className="text-gray-700 dark:text-gray-400"
                  >
                    <td className="px-6 py-4 text-sm border-b dark:border-gray-700 dark:text-gray-400 ">
                      {module.title}
                    </td>
                    <td className="px-6 py-4 text-sm border-b underline text-center ">
                      <a
                        href={module.video}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        رابط الفيديو
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm border-b dark:border-gray-700 dark:text-gray-400 text-green-500 text-center">
                      {module.completed}
                    </td>
                    <td className="px-6 py-4 text-sm border-b dark:border-gray-700 dark:text-gray-400 text-red-600 text-center">
                      {module.notCompleted}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
