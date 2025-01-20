import React, { useState } from "react";

const sortOptions = [
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Price: Low to High", value: "price-asc" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "groceries", name: "Groceries" },
  { id: "fragrances", name: "Fragrances" },
  { id: "beauty", name: "Beauty" },
];

const Select = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[200px] px-4 py-2 text-left bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-haspopup="listbox"
      >
        <span className="block truncate">{options.find((opt) => opt.value === value)?.label || placeholder}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
          <ul className="py-1 overflow-auto text-base max-h-60" role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                className="px-4 py-2 cursor-pointer hover:bg-blue-50"
                role="option"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

function CategoryFilter({ onFilterChange }) {
  const [filters, setFilters] = useState({ sort: "", category: "all" });

  const updateFilters = (newFilter) => {
    const updatedFilters = { ...filters, ...newFilter };
    setFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  return (
    <div className="h-full w-full flex justify-between items-center z-30">
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => updateFilters({ category: category.id })}
              className={`
                px-4 py-2 text-sm rounded-lg border transition-colors
                ${
                  filters.category === category.id
                    ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }
              `}
              aria-pressed={filters.category === category.id}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <Select
          options={sortOptions}
          value={filters.sort}
          onChange={(value) => updateFilters({ sort: value })}
          placeholder="Sort by Price"
        />
      </div>
    </div>
  );
}

export default CategoryFilter;
