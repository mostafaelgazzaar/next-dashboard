import UsersTable from "@/app/ui/users/table";

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

  return (
    <>
      <UsersTable query={query} currentPage={currentPage} />
    </>
  );
}
