import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoFilterSharp } from "react-icons/io5";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

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

export function Categories({ onFilterChange }) {
  const [filters, setFilters] = useState({ sort: "", category: "all" });

  const updateFilters = (newFilter) => {
    const updatedFilters = { ...filters, ...newFilter };
    setFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  //#09090B black
  // #FFFFFF
  // #18181B

  return (
    <div className="flex justify-between items-center">
      {/* Sheet Trigger only wraps the Filter Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700">
            <IoFilterSharp />
            Filter
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Category</SheetTitle>
            <SheetDescription>
              "Discover a curated selection of top-quality products across various categories. Shop with ease and find
              everything you need, from the latest trends to everyday essentials."
            </SheetDescription>
          </SheetHeader>
          <div className="flex gap-y-8 mt-3 justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <SheetClose asChild key={category.id}>
                    <Button
                      onClick={() => updateFilters({ category: category.id })}
                      variant={filters.category === category.id ? "default" : "outline"}
                      className={`capitalize transition-colors ${
                        filters.category === category.id
                          ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                      }`}
                    >
                      {category.name}
                    </Button>
                  </SheetClose>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Sort Dropdown (Outside SheetTrigger) */}
      <Select value={filters.sort} onValueChange={(value) => updateFilters({ sort: value })}>
        <SelectTrigger className="w-[180px] bg-white text-black dark:bg-gray-800 dark:text-white">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent className="bg-white text-black dark:bg-gray-800 dark:text-white">
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
