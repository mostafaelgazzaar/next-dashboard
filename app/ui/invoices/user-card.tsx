"use client";
import { User } from "@/app/lib/definitions";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  ENVIROMENT,
  ENVIROMENTAR,
  RoleAR,
  RoleEN,
} from "@/app/lib/enums/dashboard";
import { AcademicCapIcon } from "@heroicons/react/20/solid";

export default function UserCard({ user }: { user: User }) {
  return (
    <>
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-2">
        <div className="flex justify-center px-6 ">
          <Image
            className=""
            src="/student-svgrepo-com.png"
            alt="avatar"
            width={150}
            height={150}
          />
        </div>

        <div className="flex items-center px-6 py-3 bg-gray-900">
          <BookOpenIcon className="h-6 w-6 fill-current text-white" />
          <h1 className="mx-3 text-white font-semibold text-lg">التعلم</h1>
        </div>
        <div className="py-4 px-6">
          <h1 className="text-xl font-semibold text-gray-800">{user.name}</h1>
          <p className="py-2 text-lg text-gray-700">طالب بجامعة عين شمس</p>
          <div className="flex items-center mt-4 text-gray-700">
            <AcademicCapIcon className="h-6 w-6 fill-current" />
            <h1 className="px-2 text-sm">
              {`المستوي : `}
              <span className="text-blue-600 text-md ">
                {user.env === ENVIROMENT.high
                  ? ENVIROMENTAR.high
                  : user.env === ENVIROMENT.medium
                  ? ENVIROMENTAR.medium
                  : ENVIROMENTAR.low}
              </span>
            </h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
              <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
            </svg>
            <h1 className="px-2 text-sm">
              {user.role === RoleEN.student ? RoleAR.student : RoleAR.admin}
            </h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
              <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
            </svg>
            <h1 className="px-2 text-sm">{user.email}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
