import SideNav from "@/app/ui/dashboard/sidenav";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/app/ui/navbar";
import { auth } from "@/auth";
import Footer from "../ui/home/footer";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await auth();
  return (
    <SessionProvider>
      <Navbar user={user} />
      <div className="flex h-screen flex-col md:flex-row ">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-scrol md:p-12 ">
          {children}
          <Footer />
        </div>
      </div>
    </SessionProvider>
  );
}
