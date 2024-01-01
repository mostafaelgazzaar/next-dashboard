"use client";
import {
  BookOpenIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  MapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { User } from "@/app/lib/definitions";
import { PhoneArrowUpRightIcon } from "@heroicons/react/20/solid";
import { ModuleStatus } from "@/app/lib/params-types";
export default function NavLinks({
  examIds,
  user,
  moduleStatus,
}: {
  examIds: number[];
  user: User;
  moduleStatus: ModuleStatus[];
}) {
  const pathname = usePathname();
  const [expandedExams, setExpandedExams] = useState(false);
  const isAdmin = user?.role === "ADMIN";
  const links = [
    {
      name: "الصفحة الرئيسية",
      href: "/dashboard/home",
      icon: MapIcon,
      expandable: false,
      visible: !isAdmin,
    },
    {
      name: "التعليمات",
      href: "/dashboard/information",
      icon: MapIcon,
      expandable: false,
      visible: !isAdmin,
    },
    {
      name: "لوحة التحكم",
      href: "/dashboard",
      icon: HomeIcon,
      expandable: false,
    },
    {
      name: "ملفات الانشطة ",
      href: "/dashboard/invoices",
      icon: DocumentDuplicateIcon,
      expandable: false,
      visible: isAdmin,
    },
    {
      name: "لوحة المعلومات",
      href: "/dashboard/customers",
      icon: UserGroupIcon,
      expandable: false,
      visible: !isAdmin,
    },
    {
      name: "المستخدمين",
      href: "/dashboard/users",
      icon: UserGroupIcon,
      expandable: false,
      visible: isAdmin,
    },
    {
      name: "الموديلات ",
      href: "/dashboard/exams",
      icon: BookOpenIcon,
      expandable: true,
      visible: !isAdmin,
      subLinks: [
        ...examIds.map((id) => ({
          name: `${numberToName(Number(id))}`,
          href: `/dashboard/exams/${id}`,
          status: moduleStatus.find((module) => module.module_id === Number(id))
            ?.completed,
        })),
      ],
    },

    {
      name: "من نحن",
      href: "/dashboard/about",
      icon: UserGroupIcon,
      expandable: false,
      visible: !isAdmin,
    },
    {
      name: "تواصل معنا ",
      href: "/dashboard/contact",
      icon: PhoneArrowUpRightIcon,
      expandable: false,
      visible: !isAdmin,
    },
  ];
  const handleExamsToggle = () => {
    setExpandedExams((prev) => !prev);
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <Link
            href={link.expandable ? "#" : link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              },
              { hidden: !link.visible },
            )}
            onClick={() => link.expandable && handleExamsToggle()}
          >
            <p className="text-sm font-medium p-3">
              {" "}
              <span>
                <link.icon className="w-4 h-4 inline-flex m-2" />
              </span>
              {link.name}
            </p>
            {link.expandable && (
              <ChevronDownIcon
                className={clsx("w-6 transition-transform transform", {
                  "rotate-180": expandedExams,
                })}
              />
            )}
          </Link>
          {link.expandable && expandedExams && (
            <div className="ml-6 ">
              {link.subLinks?.map((subLink) => (
                <Link
                  key={subLink.name}
                  href={subLink.status === undefined ? "#" : subLink.href}
                  className={clsx(
                    "flex h-[48px]  grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 mt-2",
                    {
                      "bg-sky-100 text-blue-600": pathname === subLink.href,
                    },
                    subLink.status === undefined && "cursor-not-allowed",
                  )}
                >
                  <p className="hidden md:block">{subLink.name}</p>
                  {subLink.status && (
                    <span className="text-green-600">(مكتمل)</span>
                  )}
                  {subLink.status === false && (
                    <span className="text-yellow-600">(غير مكتمل)</span>
                  )}
                  {subLink.status === undefined && (
                    <span className="text-red-600"> (مغلق)</span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export function numberToName(num: number) {
  switch (num) {
    case 1:
      return "الموديول الأول";
    case 2:
      return "الموديول الثاني";
    case 3:
      return "الموديول الثالث";
    case 4:
      return "الموديول الرابع";
    case 5:
      return "الموديول الخامس";
    case 6:
      return "الموديول السادس";
    case 7:
      return "الموديول السابع";
    case 8:
      return "الموديول الثامن";
    case 9:
      return "الموديول التاسع";
  }
}
