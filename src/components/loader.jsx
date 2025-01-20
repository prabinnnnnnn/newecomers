import React from "react";

export default function Loader() {
  return (
    /* From Uiverse.io by bundui */
    <div className="relative w-[300px] mx-auto h-auto gap-x-3 flex flex-col justify-between p-2 border border-gray-200 !rounded shadow animate-pulse dark:border-gray-400">
      <div className="flex h-[300px] bg-gray-300 rounded dark:bg-gray-400 mb-2"></div>

      <div className="">
        <div className="h-2.5 w-full bg-gray-200 !rounded dark:bg-gray-400  mb-2"></div>
        <div className="w-32 h-2 bg-gray-200 rounded dark:bg-gray-400 mb-2"></div>
      </div>

      <div className="h-12 bg-gray-200 !rounded dark:bg-gray-400 w-full"></div>
    </div>
  );
}
