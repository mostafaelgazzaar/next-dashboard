"use server";
import FullPage from "@/app/ui/exams/fullpage";
import { Suspense } from "react";
import { fetchModules, fetchUsersModules } from "@/app/lib/data/modules-data";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import {
  checkUserCompletion,
  handleOpenNextModule,
} from "@/app/lib/actions/module-actions";
export default async function Page({ params }: { params: { id: number } }) {
  // @ts-ignore
  const { user } = await auth();
  const id = params.id;
  const modules = await fetchModules();
  const userModules = await fetchUsersModules(user.id);
  const pageModule = modules.find((module) => +module.id === +id);
  if (!pageModule) {
    notFound();
  }
  const userModule = userModules.find((module) => +module.module_id === +id);
  if (!userModule) {
    notFound();
  }
  // await handleOpenNextModule(user.id, id);

  return (
    <div>
      <Suspense>
        <FullPage data={pageModule} user={user} userModule={userModule} />
      </Suspense>
    </div>
  );
}
