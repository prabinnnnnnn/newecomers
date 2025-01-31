import React from "react";
import Loader from "./loader";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ScaleTon() {
  return array.map((_, index) => <Loader key={index} />);
}
