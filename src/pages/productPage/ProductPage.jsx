import React, { useContext, useState, useEffect } from "react";
import { ContextData } from "@/context/ContextDataProvide";
import { Categories } from "./category";
import Loader from "@/components/loaders/Loader";
import Cart from "@/components/layouts/CartCard";

const ProductPage = () => {
  const data = useContext(ContextData);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const sortAndFilterData = () => {
    if (!data) return [];

    let currentData = [...data];

    if (selectedCategory !== "all") {
      currentData = currentData.filter(
        (item) => item.category === selectedCategory
      );
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
    <div className="w-full">
      <div className="bg-bl mt-16">
        <div className="p-3 sm:px-8 sm:py-4 border-b">
          <Categories onFilterChange={handleFilterChange} />
        </div>
        <div className="relative overflow-hidden">
          <div className="inset-0 p-4 overflow-y-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 auto-rows-max">
              {isLoading ? (
                <Loader />
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

export default React.memo(ProductPage);
