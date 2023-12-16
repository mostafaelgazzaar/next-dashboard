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
export default function NavLinks({
  examIds,
  user,
}: {
  examIds: string[];
  user: User;
}) {
  const pathname = usePathname();
  const [expandedExams, setExpandedExams] = useState(false);
  const isAdmin = true;
  // user?.role === "ADMIN";
  const links = [
    {
      name: "Instructions",
      href: "/dashboard/home",
      icon: MapIcon,
      expandable: false,
    },
    { name: "Home", href: "/dashboard", icon: HomeIcon, expandable: false },
    {
      name: "Invoices",
      href: "/dashboard/invoices",
      icon: DocumentDuplicateIcon,
      expandable: false,
      // visible: isAdmin,
    },
    {
      name: "My Dashboard",
      href: "/dashboard/customers",
      icon: UserGroupIcon,
      expandable: false,
      // visible: !isAdmin,
    },
    {
      name: "Users",
      href: "/dashboard/users",
      icon: UserGroupIcon,
      expandable: false,
      // visible: isAdmin,
    },
    {
      name: "Exams",
      href: "/dashboard/exams",
      icon: BookOpenIcon,
      expandable: true,
      visible: !isAdmin,
      sublinks: [
        ...examIds.map((id) => ({
          name: `Exam ${id}`,
          href: `/dashboard/exams/${id}`,
        })),
      ],
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
              }
              // { hidden: !link.visible },
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
              {link.sublinks?.map((sublink) => (
                <Link
                  key={sublink.name}
                  href={sublink.href}
                  className={clsx(
                    "flex h-[48px]  grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 mt-2",
                    {
                      "bg-sky-100 text-blue-600": pathname === sublink.href,
                    }
                  )}
                >
                  <p className="hidden md:block">{sublink.name}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
