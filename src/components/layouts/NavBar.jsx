import MenuBar from "@/pages/productPage/menuBar";
import ShoppingCard from "@/pages/cart/shopingCard";
import SearchItems from "@/pages/productPage/searchItems";
import DarkModeButton from "./DarkMode";
import { IoSearch } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const NavBar = () => {
  const [isSearchItemsOpen, setSearchItemsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="w-full border-b fixed top-0 z-50 bg-background/90 backdrop-saturate-200 backdrop-blur-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <MenuBar />
          </div>

          {/* Logo */}
          <div className="hidden sm:flex items-center font-[sans-serif, Manjari]">
            <h1 className="font-[Manjari] text-xl uppercase opacity-50">
              Kanoa Store
            </h1>
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
                className="w-full pl-10 pr-4 py-2 rounded-lg"
                placeholder="Search for products..."
                variant="outline"
              />

              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoSearch className="h-5 w-5 opacity-50" />
              </div>
            </div>
            {isSearchItemsOpen && <SearchItems query={searchQuery} />}
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            {/* Profile */}
            <Button
              variant="ghost"
              className="p-3 hidden sm:flex items-center"
              title="profile"
            >
              <Avatar className="h-5 w-5 rounded-full overflow-hidden">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User avatar"
                />
                <AvatarFallback className="border border-border">
                  Pp
                </AvatarFallback>
              </Avatar>
            </Button>
            {/* Cart */}
            <ShoppingCard />

            <div className="hidden sm:block">
              <DarkModeButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
