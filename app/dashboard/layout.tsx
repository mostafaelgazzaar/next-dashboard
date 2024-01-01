import SideNav from "@/app/ui/dashboard/sidenav";
import Navbar from "@/app/ui/navbar";
import { auth } from "@/auth";
import Footer from "../ui/home/footer";
import { Session } from "next-auth/types";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = (await auth()) as Session;
  return (
    <>
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
    </>
  );
}
