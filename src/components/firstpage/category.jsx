import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  { name: "shoes", image: "https://cdn.pixabay.com/photo/2021/03/08/12/06/oxford-shoes-6078951_1280.jpg" },
];

export default function Category() {
  return (
    <section className="max-w-7xl mx-auto overflow-hidden px-4 sm:px-0">
      <h2 className="text-2xl font-bold mb-6 max-sm:mt-4">Featured Categories</h2>

      <div className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {Categories.map((item, index) => (
          <Card
            key={index}
            className="relative h-[300px] max-sm:h-[200px] w-[23%] max-sm:w-[70%] flex-shrink-0 overflow-hidden group snap-start rounded-sm"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent p-4 flex flex-col justify-between z-10">
              <h1 className="text-xl font-bold text-white capitalize">{item.name}</h1>
              <Button variant="secondary" className="transition font-semibold p-3">
                Shop Now
              </Button>
            </div>

            {/* Image (Full Cover) */}
            <CardContent className="p-0 h-full">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-110 ease-in duration-100"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
