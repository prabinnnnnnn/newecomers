import React, { useContext, useEffect, useState } from "react";
import ScaleTon from "./scalton";
import Cart from "./cart";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { ContextData } from "../App";

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

const Categories = [
  {
    name: "men",
    image:
      "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "kid",
    image: "https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_1280.jpg",
  },
  { name: "women", image: "https://cdn.pixabay.com/photo/2016/11/18/17/14/cloth-1835894_1280.jpg" },
  { name: "shose", image: "https://cdn.pixabay.com/photo/2021/03/08/12/06/oxford-shoes-6078951_1280.jpg" },
];

export default function Main() {
  const data = useContext(ContextData);

  const [fashionImage, setFashionImage] = useState(0);

  /*   useEffect(() => {
    const interval = setTimeout(() => {
      setFashionImage((current) => (current + 1) % summerImage.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [fashionImage]); */

  const [slice, setSlie] = useState(4);
  const [view, setView] = useState(false);

  const handleViewAll = (e) => {
    e.preventDefault();
    setView((prev) => (prev = !prev));
    if (!view) {
      setSlie((prev) => (prev = data.length));
    } else {
      setSlie((prev) => (prev = 4));
    }
  };

  return (
    <main className="overflow-y-scroll">
      <div className="relative max-w-8xl mx-auto px-8 py-4">
        <div className="relative h-[550px] overflow-hidde">
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

      <section className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 py-10 max-sm:py-2 overflow-hidden box-border">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 max-sm:mt-4">Featured Categories</h2>

        <div className="relative h-[300px] max-sm:h-[200px] w-auto flex items-center gap-x-[34px] overflow-x-scroll overflow-y-hidden snap-x box-border">
          {Categories.map((item, index) => {
            return (
              <div
                key={index}
                className="relative h-full w-[23%] max-sm:w-[70%] flex-shrink-0 box-border overflow-hidden group snap-start"
              >
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/50 to-transparent flex justify-start items-start p-2">
                  <div className="h-full w-full text-white max-w-xl flex flex-col justify-between">
                    <h1 className="text-xl font-bold capitalize">{item.name}</h1>
                    <button className="!rounded-button text-custom px-6 py-3 font-semibold border hover:bg-gray-100 hover:text-black transition">
                      Shop Now
                    </button>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full z-0 object-cover transition-transform duration-300 ease-in group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-10  max-sm:py-5">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Special Offers</h2>
            {view ? (
              <a href=" " onClick={handleViewAll} className="text-custom font-semibold hover:text-custom-dark">
                View less
              </a>
            ) : (
              <a href=" " onClick={handleViewAll} className="text-custom font-semibold hover:text-custom-dark">
                View All
              </a>
            )}
          </div>
          <div className="grid grid-cols-4  gap-8 overflow-hidden box-border max-sm:grid-cols-1">
            {data ? (
              data
                .filter((item) => item.discountPercentage)
                .slice(0, slice)
                .map((item, index) => <Cart key={index} item={item} />)
            ) : (
              <ScaleTon />
            )}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </main>
  );
}
