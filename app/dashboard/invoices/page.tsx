import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { usersWithPdfPages } from "@/app/lib/data/modules-data";
import Dropdown from "@/app/ui/dashboard/dropdown";

export default async function PagePage({
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
  const totalPages = await usersWithPdfPages(moduleId, query);
  console.log(totalPages);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>الانشطة</h1>
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
          <Table query={query} moduleId={moduleId} currentPage={currentPage} />
        </Suspense>
      }
      <div className="mt-5 flex w-full justify-center">
        {<Pagination totalPages={totalPages} />}
      </div>
    </div>
  );
}
