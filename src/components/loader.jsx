import React from "react";

export default function Loader() {
  return (
    /* From Uiverse.io by bundui */
    <div className="relative w-full max-w-[300px] mx-auto flex flex-col justify-between rounded-md overflow-hidden shadow-lg ">
      {/* Card Content */}
      <div className="rounded-md p-2 border border-gray-200 dark:border-gray-400 h-full flex flex-col">
        {/* Image Skeleton */}
        <div className="relative w-full pt-[100%] animate-pulse">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-300 dark:bg-gray-400 rounded-md" />
        </div>

        {/* Title and Price Skeletons */}
        <div className="pt-4 flex flex-col gap-y-2 animate-pulse">
          {/* Title */}
          <div className="h-2.5 bg-gray-200 dark:bg-gray-400 rounded-md w-full" />

          {/* Price */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-4 mb-2 animate-pulse">
            <div className="h-2.5 bg-gray-200 dark:bg-gray-400 rounded-md w-24" />
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="h-[38px] sm:h-[44px] bg-gray-200 dark:bg-gray-400 rounded-md w-full mt-2 animate-pulse" />
      </div>
    </div>
  );
}
