import Search from "@/app/ui/search";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { usersWithPdfPages } from "@/app/lib/data/modules-data";
import Dropdown from "@/app/ui/dashboard/dropdown";
import Pagination from "@/app/ui/invoices/pagination";
import UserActivityTable from "@/app/ui/invoices/user-activity-table";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    module?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  let moduleId;
  if (searchParams && searchParams.module) {
    moduleId = Number(searchParams.module);
  } else {
    moduleId = 1;
  }

  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await usersWithPdfPages(moduleId);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>التفاعل والتعليقات</h1>
      </div>
      <div className="mt-4 flex items-center justify-start  md:mt-8">
        <Dropdown />
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="ابحث " />
      </div>
      {
        <Suspense
          key={query + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <UserActivityTable
            query={query}
            moduleId={moduleId}
            currentPage={currentPage}
          />
        </Suspense>
      }
      <div className="mt-5 flex w-full justify-center">
        {<Pagination totalPages={totalPages} />}
      </div>
    </div>
  );
}
