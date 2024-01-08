"use server";
import FullPage from "@/app/ui/exams/fullpage";
import { Suspense } from "react";
import {
  fetchModules,
  fetchUsersModules,
  getUserModulePdf,
} from "@/app/lib/data/modules-data";
import { notFound } from "next/navigation";
import { auth } from "@/auth";

import { getUserPerformance } from "@/app/lib/data/dashboard-data";
export default async function Page({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { tab: string };
}) {
  // @ts-ignore
  const { user } = await auth();
  const id = params.id;
  const modules = await fetchModules();
  const userModules = await fetchUsersModules(user.id);
  const pageModule = modules.find((module) => +module.id === +id);
  const userPdf = await getUserModulePdf(user.id, id);
  if (!pageModule) {
    notFound();
  }
  const userModule = userModules.find((module) => +module.module_id === +id);
  if (!userModule) {
    notFound();
  }

  const tab = searchParams.tab;
  const userPerformance = await getUserPerformance(user.id);

  return (
    <div>
      <Suspense>
        <FullPage
          data={pageModule}
          user={user}
          userModule={userModule}
          userPerformance={userPerformance}
          userPdf={userPdf}
          tab={tab}
        />
      </Suspense>
    </div>
  );
}
