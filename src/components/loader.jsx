import React from "react";
import SkeletonCard from "./skeletoncard";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Loader() {
  return array.map((_, index) => <SkeletonCard key={index} />);
}
