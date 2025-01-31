import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Rating from "../rating";
import ProductReviews from "./reviwes";

export default function ProductView() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const item = state.productDetails;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-full w-full p-2">
      <button onClick={handleBack} title="return" className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        <IoMdArrowRoundBack />
      </button>
      <div className="w-full h-auto sm:h-[92%] grid sm:grid-cols-3 gap-3 ">
        <div className="col-span-1 overflow-hidden flex justify-center items-center">
          <img src={item?.image} alt="" className=" aspect-square object-contain " />
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">{item?.title}</h1>

          <div className="flex items-center mb-4">
            <Rating rating={item?.rating.rate} max={5} />
            <span className="ml-2 text-gray-600">({item?.rating.count} reviews)</span>
          </div>

          <p className="text-xl font-semibold text-blue-600 mb-4">${item?.price}</p>

          <p className="mb-4">{item?.description}</p>

          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-6 md:mt-16">
            Add to Cart
          </button>
        </div>
        <div className="col-span-1 h-full w-full overflow-y-scroll py-3">
          <ProductReviews />
        </div>
      </div>
    </div>
  );
}
