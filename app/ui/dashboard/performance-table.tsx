import {
  BookOpenIcon,
  ChatBubbleOvalLeftIcon,
  CloudArrowUpIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Duration from "@/app/ui/exams/duration";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import ProgressLine from "@/app/ui/dashboard/lin-progress";
import { Tooltip } from "antd";

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
    <table
      role="table"
      className="w-full min-w-[500px] overflow-x-scroll shadow-md rounded-lg "
    >
      <thead className="bg-gray-50 p-2">
        <tr role="row">
          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="cursor-pointer"
          >
            <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
              مؤشرات الاداء الخاصه بكل موديول
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
            colSpan={3}
            role="columnheader"
            title="Toggle SortBy"
            className="cursor-pointer"
          >
            <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
              التحسين
            </div>
          </th>
        </tr>
      </thead>
      <tbody role="rowgroup" className="px-4">
        <tr role="row">
          <td className="py-3 text-sm px-3" role="cell">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[30px] rounded-full">
                <BookOpenIcon />
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                مشاهدة المحتوي
              </p>
            </div>
          </td>
          <td className="py-3 text-sm" role="cell">
            <Duration
              time={data.watchedDuration}
              className="text-sm text-black"
              text=""
            />
          </td>
          <td className="py-3 text-sm" role="cell">
            <div className="mx-2 flex font-bold">
              <div className="h-2 w-30 rounded-full  dark:bg-navy-700">
                <div className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400">
                  {data.watchedDuration >= data.moduleDuration / 2 ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      احسنت
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      {withDetails ? (
                        <Link href={`/dashboard/exams/${moduleId}?tab=Video`}>
                          اعادة المشاهدة{" "}
                        </Link>
                      ) : (
                        "----"
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </td>
          <td className=" text-lg" role="cell">
            {withDetails && (
              <Tooltip
                placement={"topRight"}
                title="النسبة التي شاهدتها من المحتوي"
              >
                <ProgressLine
                  percentage={Math.round(
                    (data.watchedDuration / data.moduleDuration) * 100,
                  )}
                />
              </Tooltip>
            )}
          </td>
        </tr>
        <tr role="row">
          <td className="py-3 text-sm px-3" role="cell">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[30px] rounded-full">
                <BookOpenIcon />
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                نتائج الاختبار
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
              <div className="h-2 w-30 rounded-full  dark:bg-navy-700">
                <div className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400">
                  {data.moduleResultScore > 3 ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      احسنت
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      {withDetails ? (
                        <>
                          {" "}
                          <Link href={`/dashboard/exams/${moduleId}?tab=test`}>
                            اعادة الاختبار{" "}
                          </Link>
                        </>
                      ) : (
                        "----"
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </td>
          {withDetails && (
            <td className=" text-lg" role="cell">
              <Tooltip placement="topRight" title="نتيجة الاختبار الكلية">
                <ProgressLine
                  percentage={Math.round((data.moduleResultScore / 5) * 100)}
                />
              </Tooltip>
            </td>
          )}
        </tr>
        <tr role="row">
          <td className="py-3 text-sm px-3" role="cell">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[30px] rounded-full">
                <ChatBubbleOvalLeftIcon />
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                التعليقات
              </p>
            </div>
          </td>
          <td className="py-3 text-sm" role="cell">
            <p className="text-md font-medium text-gray-600 dark:text-white">
              {data.addedComments ? "مكتمل" : "غير مكتمل"}
            </p>
          </td>
          <td className="py-3 text-sm" role="cell">
            <div className="mx-2 flex font-bold">
              <div className="h-2 w-30 rounded-full  dark:bg-navy-700">
                <div className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400">
                  {data.addedComments ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      احسنت
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      {withDetails ? (
                        <>
                          <Link href={`/dashboard/exams/${moduleId}?tab=Video`}>
                            {" "}
                            اضافة تعليق
                          </Link>
                        </>
                      ) : (
                        "----"
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </td>
          {withDetails && (
            <td className="py-3 text-sm" role="cell">
              <ProgressLine percentage={data.addedComments ? 100 : 0} />
            </td>
          )}
        </tr>
        <tr role="row">
          <td className="py-3 text-sm px-3" role="cell">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[30px] rounded-full">
                <HandThumbUpIcon />
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                اعجبك المحتوي
              </p>
            </div>
          </td>
          <td className="py-3 text-sm" role="cell">
            <p className="text-md font-medium text-gray-600 dark:text-white">
              {data.addedLikes ? "مكتمل " : "غير مكتمل "}
            </p>
          </td>
          <td className="py-3 text-sm" role="cell">
            <div className="mx-2 flex font-bold">
              <div className="h-2 w-30 rounded-full  dark:bg-navy-700">
                <div className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400 w-full">
                  {data.addedLikes ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      احسنت
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      {withDetails ? (
                        <>
                          <Link href={`/dashboard/exams/${moduleId}?tab=Video`}>
                            اضافة اعجاب
                          </Link>
                        </>
                      ) : (
                        "----"
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </td>
          {withDetails && (
            <td className="py-3 text-sm" role="cell">
              <ProgressLine percentage={data.addedLikes ? 100 : 0} />
            </td>
          )}
        </tr>

        <tr role="row">
          <td className="py-3 text-sm px-3" role="cell">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[30px] rounded-full">
                <CloudArrowUpIcon />
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                النشاط
              </p>
            </div>
          </td>
          <td className="py-3 text-sm" role="cell">
            <p className="text-md font-medium text-gray-600 dark:text-white">
              {data.addedPdf ? "مكتمل" : "غير مكتمل"}
            </p>
          </td>
          <td className="py-3 text-sm" role="cell">
            <div className="mx-2 flex font-bold">
              <div className="h-2 w-30 rounded-full  dark:bg-navy-700">
                <div className=" h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400 w-full">
                  {data.addedPdf ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      احسنت
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      {withDetails ? (
                        <>
                          <Link
                            href={`/dashboard/exams/${moduleId}?tab=upload`}
                          >
                            ارفع النشاط
                          </Link>
                        </>
                      ) : (
                        "----"
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </td>
          {withDetails && (
            <td className="py-3 text-sm" role="cell">
              <ProgressLine percentage={data.addedPdf ? 100 : 0} />
            </td>
          )}
        </tr>
        <tr role="row">
          <td className="py-3 text-sm px-3" role="cell">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                النتيجة الكلية
              </p>
            </div>
          </td>
          <td className="py-3 text-sm" role="cell">
            <p className="text-md font-medium text-gray-600 dark:text-white">
              {`${data.percentage} %`}
            </p>
          </td>

          <td></td>
          {withDetails && (
            <td className="py-3 text-sm" role="cell">
              <Tooltip placement="topRight" title="النسبة الكلية للموديول">
                <ProgressLine percentage={data.percentage} />
              </Tooltip>
            </td>
          )}
        </tr>

        {withDetails && (
          <tr role="row">
            <td className="py-3 text-sm px-3" role="cell">
              <div className="flex items-center gap-2">
                <div className="h-[30px] w-[30px] rounded-full">
                  <GlobeAltIcon />
                </div>
                <p className="text-sm font-medium text-navy-700 dark:text-white">
                  مشاهدة المحتوي بطريقة اخري{" "}
                </p>
              </div>
            </td>
            <td className="py-3 text-sm" role="cell"></td>
            <td className="py-3 text-sm" role="cell">
              <div className="mx-2 flex font-bold">
                <div className="h-2 w-20 rounded-full  dark:bg-navy-700">
                  <div className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400 w-full">
                    <Link href={data.enhanceUrl}>
                      <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        انقر هنا
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export type PerformanceData = {
  addedComments: string;
  addedLikes: boolean;
  addedPdf: boolean;
  moduleResultScore: number;
  watchedDuration: number;
  enhanceUrl: string;
  moduleDuration: number;
  percentage: number;
};
