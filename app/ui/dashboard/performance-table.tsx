import { ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  BookOpenIcon,
  ChatBubbleOvalLeftIcon,
  CloudArrowUpIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PerformanceTable({
  data,
  moduleId,
  withDetails,
}: {
  data: PerformanceData;
  moduleId: number;
  withDetails?: boolean;
}) {
  return (
    <table role="table" className="w-full min-w-[500px] overflow-x-scroll">
      <thead>
        <tr role="row">
          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="cursor-pointer"
          >
            <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
              الميزة
            </div>
          </th>
          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="cursor-pointer"
          >
            <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
              النتيجة
            </div>
          </th>
          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="cursor-pointer"
          >
            <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
              التقييم
            </div>
          </th>
        </tr>
      </thead>
      <tbody role="rowgroup" className="px-4">
        <tr role="row">
          <td className="py-3 text-sm" role="cell">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[30px] rounded-full">
                <ChatBubbleOvalLeftIcon />
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                التعليقات
                {withDetails && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {" -  10 %"}
                  </span>
                )}
              </p>
            </div>
          </td>
          <td className="py-3 text-sm" role="cell">
            <p className="text-md font-medium text-gray-600 dark:text-white">
              {data.addedComments}
            </p>
          </td>
          <td className="py-3 text-sm" role="cell">
            <div className="mx-2 flex font-bold">
              <div className="h-2 w-16 rounded-full  dark:bg-navy-700">
                <div className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400">
                  {data.addedComments ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      عظيم
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      <Link href={`/dashboard/exams/${moduleId}`}>enhance</Link>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr role="row">
          <td className="py-3 text-sm" role="cell">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[30px] rounded-full">
                <BookOpenIcon />
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                نتائج الاختبار
                {withDetails && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {" -  40 %"}
                  </span>
                )}
              </p>
            </div>
          </td>
          <td className="py-3 text-sm" role="cell">
            <p className="text-md font-medium text-gray-600 dark:text-white">
              {`${data.moduleResultScore} / 5`}
            </p>
          </td>
          <td className="py-3 text-sm" role="cell">
            <div className="mx-2 flex font-bold">
              <div className="h-2 w-16 rounded-full  dark:bg-navy-700">
                <div className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400">
                  {data.moduleResultScore ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      ممتاز
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      <Link href={`/dashboard/exams/${moduleId}`}>enhance</Link>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr role="row">
          <td className="py-3 text-sm" role="cell">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[30px] rounded-full">
                <HandThumbUpIcon />
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                اعجبك المحتوي
                {withDetails && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {" -  10 %"}
                  </span>
                )}
              </p>
            </div>
          </td>
          <td className="py-3 text-sm" role="cell">
            <p className="text-md font-medium text-gray-600 dark:text-white">
              {data.addedLikes ? "نعم " : "لا "}
            </p>
          </td>
          <td className="py-3 text-sm" role="cell">
            <div className="mx-2 flex font-bold">
              <div className="h-2 w-20 rounded-full  dark:bg-navy-700">
                <div className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400 w-full">
                  {data.addedLikes ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      Wow 🎉
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      <Link href={`/dashboard/exams/${moduleId}`}>
                        اضافة اعجاب
                      </Link>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr role="row">
          <td className="py-3 text-sm" role="cell">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[30px] rounded-full">
                <CloudArrowUpIcon />
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                النشاط
                {withDetails && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {"-  20 %"}
                  </span>
                )}
              </p>
            </div>
          </td>
          <td className="py-3 text-sm" role="cell">
            <p className="text-md font-medium text-gray-600 dark:text-white">
              {data.addedPdf ? "نعم" : "لا"}
            </p>
          </td>
          <td className="py-3 text-sm" role="cell">
            <div className="mx-2 flex font-bold">
              <div className="h-2 w-20 rounded-full  dark:bg-navy-700">
                <div className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400 w-full">
                  {data.addedPdf ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      ممتاز
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      <Link href={`/dashboard/exams/${moduleId}`}>
                        ارفع النشاط <ArrowUpIcon className="h-4 w-4" />
                      </Link>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export type PerformanceData = {
  addedComments: string;
  addedLikes: boolean;
  addedPdf: boolean;
  moduleResultScore: number;
};
