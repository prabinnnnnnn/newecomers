import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="relative w-full max-w-[300px] mx-auto flex flex-col justify-between rounded-md overflow-hidden shadow-lg">
      {/* Card Content */}
      <div className="rounded-md p-2 border h-full flex flex-col">
        {/* Image Skeleton */}
        <Skeleton className="relative w-full pt-[100%]" />

        {/* Title and Price Skeletons */}
        <div className="pt-2 flex flex-col gap-y-2">
          {/* Title */}
          <Skeleton className="h-4 rounded-sm w-full pt-2" />

          {/* Price */}
          <div className="flex flex-col justify-between sm:flex-row gap-2 sm:gap-x-4 mb-2">
            <Skeleton className="h-3 rounded-sm w-24" />
            <Skeleton className="h-3 rounded-sm w-30" />
          </div>
        </div>

        {/* Button Skeleton */}
        <Skeleton
          duration={2}
          className="h-[38px] sm:h-[44px] rounded-md w-full mt-2"
        />
      </div>
    </div>
  );
}
