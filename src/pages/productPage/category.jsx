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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Text } from "lucide-react";

const sortOptions = [
  { label: "Best Rating", value: "rating" },
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

  return (
    <div className="flex justify-between items-center">
      {/* Sheet Trigger only wraps the Filter Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-[#050506] dark:text-gray-300 dark:border-gray-600 dark:hover:bg-[#050506]">
            <Text size={28} strokeWidth={2} />
            Filter
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle className="text-left">Category</SheetTitle>
            <SheetDescription className="text-left">
              "Discover a curated selection of top-quality products across
              various categories.
            </SheetDescription>
          </SheetHeader>
          <div className="flex gap-y-8 mt-3 justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <SheetClose asChild key={category.id}>
                    <Button
                      onClick={() => updateFilters({ category: category.id })}
                      variant={
                        filters.category === category.id ? "default" : "outline"
                      }
                      className={`capitalize transition-colors ${
                        filters.category === category.id
                          ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-[#050506] dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
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
      <Select
        value={filters.sort}
        onValueChange={(value) => updateFilters({ sort: value })}
      >
        <SelectTrigger className="w-[180px] bg-white text-black dark:bg-[#050506] dark:text-white">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent className="bg-white text-black dark:bg-[#050506] dark:text-white">
          {sortOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="hover:bg-gray-100 dark:hover:bg-[#0e0e11] font-semibold"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
