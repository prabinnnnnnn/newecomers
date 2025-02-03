import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchItems from "./searchItems";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "./ui/input";
import MenuBar from "./menuBar";
import ThemeToggleButton from "./darkmode";

const NavBar = () => {
  const [isSearchItemsOpen, setSearchItemsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <MenuBar />
          </div>

          {/* Logo */}
          <div className="hidden sm:flex items-center">
            <span className="font-[Manjari] text-xl font-extralight text-gray-500 uppercase">Kanoa Store</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-2 sm:mx-8">
            <div className="relative">
              <Input
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setSearchItemsOpen(true)}
                onBlur={() => setTimeout(() => setSearchItemsOpen(false), 200)}
                type="text"
                className="w-full pl-10 pr-4 py-2 outline-0 border-gray-300 rounded-lg"
                placeholder="Search...."
              />

              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoSearch className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            {isSearchItemsOpen && <SearchItems query={searchQuery} />}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 sm:space-x-6 px-2 sm:px-4">
            {/* Cart */}
            <Link to="/cart" className="text-gray-700 hover:text-blue-500 relative" title="Cart">
              <FaShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-gray-400 text-white text-[0.6rem] leading-3 font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
            {/* Profile */}
            <Avatar className="size-7 rounded-full overflow-hidden hidden sm:block">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="border">Pp</AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <ThemeToggleButton></ThemeToggleButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
