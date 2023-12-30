import CardWrapper from "@/app/ui/dashboard/cards";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import { CardSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";
import ModulesTable from "@/app/ui/dashboard/modules-table";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  //@ts-ignore
  const { user } = await auth();
  if (user.role !== "ADMIN") {
    return redirect("/dashboard/home");
  }

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        الصفحة الرئيسية
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <hr className="my-4" />
      <div className=" grid w-full">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <ModulesTable />
        </Suspense>
      </div>
    </main>
  );
}
