import { CircleChart } from "@/app/ui/dashboard/circle-chart";
import { auth } from "@/auth";
import { getUserPerformance } from "@/app/lib/data/dashboard-data";
import {
  checkUserCompletion,
  getUserModulesScore,
} from "@/app/lib/actions/module-actions";
import UserCard from "@/app/ui/invoices/user-card";
import { User } from "@/app/lib/definitions";
import { Rating } from "@/app/ui/exams/ratings";
import PerformanceTable, {
  PerformanceData,
} from "@/app/ui/dashboard/performance-table";
import Dropdown from "@/app/ui/dashboard/dropdown";
import { getUserById } from "@/app/lib/data";
import {
  fetchModuleById,
  fetchUsersModules,
} from "@/app/lib/data/modules-data";
import { LineChartV2 } from "@/app/ui/dashboard/point-line-chart";
import ProgressCircle from "@/app/ui/dashboard/progress-circle";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { module: string };
}) {
  let userParams = params?.id;
  const moduleId: number = searchParams?.module ? +searchParams?.module : 1;
  let userId = userParams?.[0];
  const session = await auth();
  const user = session?.user as User;
  if (!userId) {
    if (user?.id) userId = user?.id;
  }
  const cardUser = await getUserById(userId);
  const selectedModule = await fetchModuleById(moduleId);
  const userModules = await fetchUsersModules(user.id);
  const {
    percentage,
    addedPdf,
    addedLikes,
    addedComments,
    moduleResultScore,
    watchedDuration,
  } = await checkUserCompletion(userId, moduleId);
  const otherModules = userModules
    .filter((module) => +module.module_id !== moduleId)
    .sort((a, b) => +a.module_id - +b.module_id);
  const otherModulesPercentage = await Promise.all(
    otherModules.map(async (module) => {
      const { percentage } = await checkUserCompletion(
        userId,
        +module.module_id
      );
      return { moduleId: +module.module_id, percentage: percentage };
    })
  );
  const modulePercentage = [
    { moduleId: moduleId, percentage: percentage },
    ...otherModulesPercentage,
  ];

  const ratingValue = percentage / 10;

  const performanceData: PerformanceData = {
    addedComments,
    addedLikes,
    addedPdf,
    moduleResultScore,
    watchedDuration,
    enhanceUrl: selectedModule?.enhance_url,
    moduleDuration: selectedModule?.duration,
    percentage,
  };

  const data: [string, string | number][] = [
    ["Task", "انشطة المستخدم"],
    [
      "مشاهدة المحتوي",
      performanceData.watchedDuration >= selectedModule?.duration / 2
        ? 20
        : 0.5,
    ],
    ["اضافة تعليق", performanceData.addedComments ? 20 : 0.5],
    ["اضافة اعجاب", performanceData.addedLikes ? 20 : 0.5],
    ["اضافة النشاط", performanceData.addedPdf ? 20 : 0.5],
    ["النتيجة", performanceData.moduleResultScore >= 3 ? 20 : 0.5],
  ];

  const options = {
    title: "مستويات تفاعل الطالب ",
    is3D: true,
  };

  const lineChartTitle = ["الموديل", "النتيجة"];
  const lineChartData: [number, number][] = modulePercentage.map((module) => [
    module.moduleId,
    module.percentage,
  ]);

  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-900">
        أداء الطالب الكلي{" "}
      </h1>
      <Dropdown />
      <div className="flex justify-between ">
        {user?.env === "LOW" && (
          <div className="mt-5 w-2/3  justify-center">
            <div className="flex-col">
              <p>النسبة المئوية لمئشرات الطالب</p>
              <ProgressCircle percentage={percentage} />
            </div>
            <CircleChart
              data={data}
              options={options}
              percentage={false}
            ></CircleChart>
            <hr className="text-gray-500 text-3xl my-3" />
            <p className="text-center text-2xl ">
              انت الان في بيئة التعليم المنخفض{" "}
            </p>
            <p className="text-xl text-center">
              لقد حصلا علي نسبة مئوية قدرها
              <span className=" text-2xl text-green-500 px-2">
                {percentage}%
              </span>{" "}
              في هذا المحتوي
            </p>

            <div className="flex justify-center mt-5">
              <Rating value={ratingValue / 2} disabled={true} />
            </div>
          </div>
        )}
        {(user?.env === "HIGH" || user.env === "MEDIUM") && (
          <section className="mt-5 ml-1 w-3/4">
            <div className="flex-col">
              <p className="mb-2 ">النسبة المئوية لمؤشرات الطالب</p>
              <ProgressCircle percentage={percentage} />
            </div>
            <CircleChart
              data={data}
              options={options}
              percentage={true}
            ></CircleChart>
            <hr className="text-gray-500 text-3xl my-3" />

            <LineChartV2 title={lineChartTitle} data={lineChartData} />
            <hr className="text-gray-500 text-3xl my-3" />
            <div>
              <PerformanceTable
                data={performanceData}
                moduleId={moduleId}
                withDetails={user.env === "HIGH"}
              />
            </div>
            <hr className="text-gray-500 text-3xl my-3" />

            <div className="grid place-items-center">
              <p className="block"> تقيمك الحالي هو </p>
              <Rating value={ratingValue / 2} disabled={true} />
            </div>
          </section>
        )}
        <div className="hidden md:block">
          <UserCard user={cardUser} />
        </div>
      </div>
    </>
  );
}
