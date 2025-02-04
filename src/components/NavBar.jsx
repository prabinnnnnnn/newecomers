import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchItems from "./searchItems";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "./ui/input";
import MenuBar from "./menuBar";
import ThemeToggleButton from "./darkmode";
import { Button } from "./ui/button";
import ShoppingCard from "./order/shopingCard";

const NavBar = () => {
  const [isSearchItemsOpen, setSearchItemsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="w-full border-b fixed top-0 z-50 bg-background">
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
                className="w-full pl-10 pr-4 py-2 rounded-lg placeholder:font-semibold text-gray-400"
                placeholder="Search for products..."
                variant="outline"
              />

              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoSearch className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            {isSearchItemsOpen && <SearchItems query={searchQuery} />}
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            {/* Profile */}
            <Button variant="ghost" className="p-3 hidden sm:flex items-center" title="profile">
              <Avatar className="h-5 w-5 rounded-full overflow-hidden">
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback className="border border-border">Pp</AvatarFallback>
              </Avatar>
            </Button>
            {/* Cart */}
            <ShoppingCard />

            <div className="hidden sm:block">
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
