import React, { useContext, useState, useEffect } from "react";
import { ContextData } from "../App";
import ScaleTon from "./scalton";
import Cart from "./cart";
import NavBar from "./NavBar";
import { Categories } from "./category";

const Shop = () => {
  const data = useContext(ContextData);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const sortAndFilterData = () => {
    if (!data) return [];

    let currentData = [...data];

    if (selectedCategory !== "all") {
      currentData = currentData.filter((item) => item.category === selectedCategory);
    }

    switch (sortOrder) {
      case "price-asc":
        return currentData.sort((a, b) => a.price - b.price);
      case "price-desc":
        return currentData.sort((a, b) => b.price - a.price);
      case "rating":
        return currentData.sort((a, b) => b.rating.rate - a.rating.rate);
      default:
        return currentData;
    }
  };

  useEffect(() => {
    if (!data) {
      setIsLoading(true);
    } else {
      const result = sortAndFilterData();
      setSortedData(result);
      setIsLoading(false);
    }
  }, [sortOrder, selectedCategory, data]);

  const handleFilterChange = ({ sort, category }) => {
    if (sort) setSortOrder(sort);
    if (category) setSelectedCategory(category);
  };

  return (
    <div className="w-full h-screen grid grid-rows-[64px,1fr]">
      <NavBar />

      <div className="grid grid-rows-[auto,1fr] bg-bl ">
        <div className="p-4 sm:px-8 sm:py-2">
          <Categories onFilterChange={handleFilterChange} />
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 p-4 overflow-y-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 auto-rows-max">
              {isLoading ? (
                <ScaleTon />
              ) : sortedData.length > 0 ? (
                sortedData.map((item) => <Cart key={item.id} item={item} />)
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No products found for the selected criteria
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Shop);
