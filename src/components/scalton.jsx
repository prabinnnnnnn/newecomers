import React from "react";
import Loader from "./loader";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ScaleTon() {
  return array.map((_, index) => <Loader key={index} />);
}

{
  /* <div className="relative h-[19rem] w-[19rem] max-sm:h[200px] max-sm:w-full bg-gradient-to-bl  from-transparent/30 to-black/45 border flex-shrink-0"></div> */
}
