import React from "react";

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

export default function Category() {
  return (
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
  );
}
