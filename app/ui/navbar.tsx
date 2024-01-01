import { User } from "@/app/lib/definitions";
import Image from "next/image";
import LogoImage from "../../public/logo.jpeg";

export default function Navbar({ user }: { user: User }) {
  return (
    <nav className=" bg-blue-50 w-full flex relative justify-between items-center mx-auto px-8 h-20">
      <div className="flex gap-2  ">
        <a className="_o6689fn" href="/">
          <div className="hidden md:block">
            <Image
              src={LogoImage}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full mt-2"
            />
          </div>
        </a>
        <div className=" flex flex-col ">
          <span className="text-2xl ">مستويات الرجع</span>
          <span className="text-gray-500 block"> بلوحة معلومات المتعلم </span>
        </div>
      </div>

      <div className="flex-initial">
        <div className="flex justify-end items-center relative"></div>

        <div className="flex" dir="ltr">
          <div className="flex items-center gap-4">
            <Image
              className=" rounded-full"
              src="/customers/balazs-orban.png"
              alt=""
              width={50}
              height={50}
            />
            <div className="font-medium dark:text-white">
              <div>{user.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {user.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
