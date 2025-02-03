import React, { useContext } from "react";
import ScaleTon from "../scalton";
import Cart from "../cart";
import { Link } from "react-router-dom";
import { ContextData } from "../../App";

export default function SpecialOffer() {
  const data = useContext(ContextData);
  return (
    <section className="py-10  max-sm:py-5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Special Offers</h2>
          <Link to={"shop"} className="text-custom font-semibold hover:text-custom-dark">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 overflow-hidden box-border sm:grid-cols-4">
          {data ? data.slice(0, 4).map((item, index) => <Cart key={index} item={item} />) : <ScaleTon />}
        </div>
      </div>
    </section>
  );
}
