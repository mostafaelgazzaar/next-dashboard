import Image from "next/image";

export default function Pages() {
  return (
    <>
      <section className="relative flex items-center h-screen overflow-hidden bg-gray-100 py-26 dark:bg-gray-800 font-poppins">
        <div className="relative max-w-5xl px-4 mx-auto">
          <div className="px-4 py-10 text-center bg-white border-indigo-900 shadow-md dark:bg-gray-700 lg:px-20 border-3 rounded-2xl">
            <div className="mb-4">
              <span className="inline-block mb-3 text-sm font-extrabold text-blue-500 dark:text-blue-400">
                من نحن
              </span>
            </div>
            <div className="mb-10 ">
              <div className="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-blue-500 rounded-full">
                <Image
                  className="object-cover w-full h-full transition-all hover:scale-110"
                  src="/customers/balazs-orban.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <h2 className="mb-2 text-xl font-extrabold dark:text-gray-300">
                د/ أية أحمد حسنين يوسف
              </h2>
              <span className="text-sm font-md text-gray-500 dark:text-gray-400">
                (تخصص تكنولوجيا التعليم)
              </span>
            </div>
            <div className="flex flex-wrap mb-10 -mx-4 lg:flex-nowrap">
              <div className="self-start px-4 text-blue-500 md:block dark:text-blue-400">
                <svg
                  width="75"
                  height="64"
                  viewBox="0 0 75 64"
                  fill="none"
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M74.1252 0.631112L72.2546 13.9596C68.5132 13.6478 65.4734 14.2714 63.1351 15.8303C60.7967 17.3112 59.1599 19.4937 58.2246 22.3776C57.3672 25.1836 57.2113 28.4573 57.7569 32.1986H74.1252V64H42.3239V32.1986C42.3239 20.9746 44.935 12.4787 50.1573 6.71079C55.3796 0.864946 63.3689 -1.16161 74.1252 0.631112ZM31.8014 0.631112L29.9307 13.9596C26.1894 13.6478 23.1495 14.2714 20.8112 15.8303C18.4729 17.3112 16.836 19.4937 15.9007 22.3776C15.0433 25.1836 14.8874 28.4573 15.433 32.1986H31.8014V64H0V32.1986C0 20.9746 2.61114 12.4787 7.83342 6.71079C13.0557 0.864946 21.045 -1.16161 31.8014 0.631112Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="w-full px-4 py-6 lg:w-auto lg:py-0">
                <p className="text-xl font-semibold text-gray-500 sm:text-xl xl:text-2xl dark:text-gray-400">
                  المدرس المساعد بقسم تكنولوجيا التعليم -كلية التربية النوعية
                  -جامعة عين شمس استكمالا لمتطلبات الحصول على درجة دكتوراه
                  الفلسفة في التربية النوعية
                </p>
              </div>
              <div className="self-end px-4 ml-auto text-blue-500 dark:text-blue-400">
                <svg
                  className="w-10 h-10"
                  width="75"
                  height="64"
                  viewBox="0 0 75 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.62939e-06 63.3689L1.87067 50.0404C5.61201 50.3522 8.65186 49.7286 10.9902 48.1697C13.3285 46.6888 14.9654 44.5063 15.9007 41.6224C16.7581 38.8164 16.914 35.5427 16.3684 31.8014H7.62939e-06V3.8147e-06H31.8014V31.8014C31.8014 43.0254 29.1902 51.5213 23.9679 57.2892C18.7457 63.1351 10.7564 65.1616 7.62939e-06 63.3689ZM42.3239 63.3689L44.1946 50.0404C47.9359 50.3522 50.9757 49.7286 53.3141 48.1697C55.6524 46.6888 57.2892 44.5063 58.2246 41.6224C59.082 38.8164 59.2378 35.5427 58.6922 31.8014H42.3239V3.8147e-06H74.1252V31.8014C74.1252 43.0254 71.5141 51.5213 66.2918 57.2892C61.0695 63.1351 53.0802 65.1616 42.3239 63.3689Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 pt-10">
          اشراف
        </h2>
      </section>
      <section className="flex items-center bg- lg:h-screen dark:bg-gray-800 font-poppins">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid gap-6 text-center md:grid-cols-3">
            <div className="p-6 mb-6 transition duration-200 ease-in border border-gray-100 shadow hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-gray-500 dark:border-gray-700 bg-stone-50 md:mb-0 dark:bg-gray-700">
              <div className="flex justify-center mb-6">
                <Image
                  src="/customers/balazs-orban.png"
                  className="object-cover w-24 h-24 border-4 rounded-full shadow-lg border-gray-50 dark:border-gray-500"
                  alt="supervisor"
                  width={200}
                  height={200}
                />
              </div>
              <p className="mb-6 text-base text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                elit sed ut perspiciatis unde omnis.
              </p>
              <p className="text-sm italic dark:text-gray-400">- Anna Morian</p>
            </div>
            <div className="p-6 mb-6 transition duration-200 ease-in border border-gray-100 shadow hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-gray-500 dark:border-gray-700 bg-stone-50 md:mb-0 dark:bg-gray-700">
              <div className="flex justify-center mb-6">
                <Image
                  src="/customers/balazs-orban.png"
                  className="object-cover w-24 h-24 border-4 rounded-full shadow-lg border-gray-50 dark:border-gray-500"
                  alt="supervisor"
                  width={200}
                  height={200}
                />
              </div>
              <p className="mb-6 text-base text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                elit sed ut perspiciatis unde omnis.
              </p>
              <p className="text-sm italic dark:text-gray-400">- Adam Smith</p>
            </div>
            <div className="p-6 mb-6 transition duration-200 ease-in border border-gray-100 shadow hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-gray-500 dark:border-gray-700 bg-stone-50 md:mb-0 dark:bg-gray-700">
              <div className="flex justify-center mb-6">
                <Image
                  src="/customers/balazs-orban.png"
                  className="object-cover w-24 h-24 border-4 rounded-full shadow-lg border-gray-50 dark:border-gray-500"
                  alt="supervisor"
                  width={200}
                  height={200}
                />
              </div>
              <p className="mb-6 text-base text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                elit sed ut perspiciatis unde omnis.
              </p>
              <p className="text-sm italic dark:text-gray-400">- John Doe</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
