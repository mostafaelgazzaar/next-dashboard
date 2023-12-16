import { CircleChart } from "@/app/ui/dashboard/circle-chart";
import { auth } from "@/auth";
import { getUserPerformance } from "@/app/lib/data/dashboard-data";
import { useSearchParams } from "next/navigation";
import { checkUserCompletion } from "@/app/lib/actions/module-actions";
import UserCard from "@/app/ui/invoices/user-card";
import { User } from "@/app/lib/definitions";
import { Rating } from "@/app/ui/exams/ratings";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({ params }: { params: { id: string } }) {
  let userParams = params?.id;
  const moduleId: number = 1;
  let userId = userParams?.[0];
  const session = await auth();
  const user = session?.user as User;
  if (!userId) {
    if (user?.id) userId = user?.id;
  }
  const userPerformance = await getUserPerformance(userId);
  const { percentage, addedPdf, addedLikes, addedComments, moduleResultScore } =
    await checkUserCompletion(userId, moduleId);
  const ratingValue = percentage / 10;

  const data = [
    ["Task", "User Activity"],
    [
      "Time on Platform",
      Math.round(userPerformance.time_on_platform_seconds / 60),
    ],
    [
      "Time Watching Videos",
      Math.round(userPerformance.time_watching_videos_seconds / 60),
    ],
    ["Interactions", userPerformance.interactions_count],
    ["Test Attempts", userPerformance.test_attempts_count],
    ["Average Test Score", userPerformance.average_test_score / 4],
  ];

  const options = {
    title: "The User Activity",
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-900">User Performance</h1>
      <div className="flex justify-between">
        {user?.env === "LOW" && (
          <div className="mt-5 ml-20">
            <p className="text-center text-2xl ">You are in low env </p>
            <p className="text-xl text-center">
              You have completed
              <span className=" text-2xl text-green-500 px-2">
                {percentage}%
              </span>{" "}
              of the module
            </p>
            <Rating value={ratingValue} />
          </div>
        )}
        {user?.env === "HIGH" && (
          <div className="mt-5">
            <CircleChart data={data} options={options}></CircleChart>;
          </div>
        )}
        <div></div>
        <div className="">
          <UserCard user={user} />
        </div>
      </div>
    </>
  );
}
