import React, { useContext, useState, useEffect } from "react";
import { ContextData } from "../App";
import ScaleTon from "./scalton";
import Cart from "./cart";
import CategoryFilter from "./filter";

const Shop = () => {
  const data = useContext(ContextData); // Data from context
  const [sortedData, setSortedData] = useState([]); // Filtered and sorted data
  const [sortOrder, setSortOrder] = useState(""); // Sorting order
  const [selectedCategory, setSelectedCategory] = useState("all"); // Selected category
  const [isLoading, setIsLoading] = useState(true);

  // Function to filter and sort data
  const sortAndFilterData = () => {
    if (!data) return [];

    // Filter by category
    let filteredData = data;
    if (selectedCategory !== "all") {
      filteredData = data.filter((item) => item.category === selectedCategory);
    }

    // Sort by price
    if (sortOrder === "price-asc") {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      filteredData.sort((a, b) => b.price - a.price);
    }

    return filteredData;
  };

  // Update sorted data whenever filters or data change
  useEffect(() => {
    const result = sortAndFilterData();
    setSortedData(result);
    setIsLoading(false);
  }, [sortOrder, selectedCategory, data]);

  // Handle filter and sort changes from CategoryFilter
  const handleFilterChange = ({ sort, category }) => {
    if (sort) setSortOrder(sort);
    if (category) setSelectedCategory(category);
  };

  return (
    <div className="w-full h-full">
      {/* Filter Bar */}
      <div className="h-[15%] w-full bg-[#faf9f6] bg-opacity-75 shadow backdrop-blur-lg sticky top-0 p-2 px-7 z-10">
        <CategoryFilter onFilterChange={handleFilterChange} />
      </div>

      {/* Product Grid */}
      <div className="h-[85vh] p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
          {isLoading ? (
            <ScaleTon />
          ) : sortedData && sortedData.length > 0 ? (
            sortedData.map((item) => <Cart key={item.id} item={item} />)
          ) : (
            <ScaleTon />
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Shop);
