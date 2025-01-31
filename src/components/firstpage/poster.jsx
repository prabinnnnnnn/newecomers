import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const summerImage = [
  {
    image:
      "https://www.dominiquehammer.com/wp-content/uploads/2023/07/230512-PORTRAIT-SW-Miriam-Lookmodels13192_BIG_v2.jpg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
  },
];

export default function Poster() {
  const [fashionImage, setFashionImage] = useState(0);

  /*   useEffect(() => {
    const interval = setTimeout(() => {
      setFashionImage((current) => (current + 1) % summerImage.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [fashionImage]); */
  return (
    <div className="relative max-w-8xl mx-auto px-8 py-4">
      <div className="relative h-[550px] overflow-hidden">
        <img
          loading="lazy"
          src={summerImage[fashionImage].image}
          className="w-full h-full object-cover object-center"
          alt="Fashion Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-transparent flex items-center justify-start  p-20 max-sm:p-2 max-sm:items-end">
          <div className="text-white flex flex-col gap-y-24 max-sm:gap-y-10">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-5xl font-bold max-sm:text-4xl">Summer Collection 2025</h1>
              <p className="text-xl">Discover the latest trends and styles</p>
            </div>
            <Link to={"shop"}>
              <button className="!rounded-button text-custom px-8 py-3 w-1/2 font-semibold border hover:bg-gray-100 hover:text-black transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
