import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { auth, signOut } from "@/auth";
import { fetchModules } from "@/app/lib/data/modules-data";

export default async function SideNav() {
  const modules = await fetchModules();
  const modulesIds = modules.map((module) => module.id);
  // @ts-ignore
  const { user } = await auth();

  return (
    <div className="flex h-screen flex-col px-3 py-4 md:px-2 ">
      <Link
        className="mb-2 flex h-20 items-end justify-center rounded-md bg-blue-20 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks examIds={modulesIds} user={user} />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
