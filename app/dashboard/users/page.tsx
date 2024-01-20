import UsersTable from "@/app/ui/users/table";
import Pagination from "@/app/ui/invoices/pagination";
import { usersCount } from "@/app/lib/data/modules-data";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query: string;
    page: number;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const usersPages = await usersCount();

  return (
    <>
      <UsersTable query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        {<Pagination totalPages={usersPages} />}
      </div>
    </>
  );
}
