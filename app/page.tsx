import HeroImage from "../public/images/home-hero.jpg";
import Image from "next/image";
export default function Page() {
  return (
    <main dir="rtl">
      <section className=" pb-8 w-full h-full">
        <div>
          <Image
            src={HeroImage}
            className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
            alt=""
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center bg-gray-900/75">
            <div className="z-10 max-w-6xl px-4 mx-auto ">
              <span className="text-xs font-semibold text-blue-400 uppercase">
                المعرفة كنز
              </span>
              <h2 className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                بيئة التعلم الالكتروني
              </h2>
              <p className="mb-8 text-base leading-8 text-gray-400 lg:text-xl">
                عزيزي الطالب/الطالبة: اهلاً ومرحبا بك في بيئة التعلم الالكترونئ
                لدراسة موضوعات أجهزة العروض التعليمية نتمنى لك رحلة تعليمية
                ممتعة. .
              </p>
              <div className="items-center justify-start block gap-4 md:flex">
                <a
                  className="block px-5 py-3 mb-4 text-sm font-semibold text-center text-gray-100 transition duration-200 bg-blue-600 rounded md:mb-0 md:inline-block hover:bg-blue-700 "
                  href="/login"
                >
                  {" "}
                  تسجيل الدخول{" "}
                </a>
                <a
                  className="block px-5 py-3 text-sm font-semibold text-center text-blue-700 transition duration-200 bg-white rounded md:inline-block hover:bg-blue-700 hover:text-gray-100"
                  href="/contact"
                >
                  {" "}
                  تواصل معنا{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
