import React from "react";
export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-full">
      {children}
    </div>
  );
}
