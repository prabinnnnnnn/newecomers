"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const sortOptions = [
  { label: "Most Popular", value: "popular" },
  { label: "Best Rating", value: "rating" },
  { label: "Newest", value: "newest" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Price: Low to High", value: "price-asc" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "electronics", name: "Electronics" },
  { id: "men's clothing", name: "Men's clothing" },
  { id: "jewelery", name: "Jewelery" },
  { id: "women's clothing", name: "Women's clothing" },
];

function CategoryFilter({ onFilterChange }) {
  const [filters, setFilters] = useState({ sort: "", category: "all" });

  const updateFilters = (newFilter) => {
    const updatedFilters = { ...filters, ...newFilter };
    setFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  return (
    <div className="flex flex-col gap-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => updateFilters({ category: category.id })}
              variant={filters.category === category.id ? "default bg-500" : "outline"}
              className={`capitalize                 ${
                filters.category === category.id
                  ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <Select value={filters.sort} onValueChange={(value) => updateFilters({ sort: value })}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value} className="hover:bg-blue-500 hover:text-white">
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default CategoryFilter;
