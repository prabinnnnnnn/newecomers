import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchItems from "./searchItems";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchItemsOpen, setSearchItemsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700" aria-label="Open Menu">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="hidden sm:flex items-center">
            <span className="font-[Manjari] text-xl font-extralight text-gray-500 uppercase">Kanoa Store</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-2 sm:mx-8">
            <div className="relative">
              <input
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setSearchItemsOpen(true)}
                onBlur={() => setTimeout(() => setSearchItemsOpen(false), 200)} // Delay for dropdown interaction
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for product or category"
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
            <div className="w-8 h-8 border rounded-full overflow-hidden" title="Account">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/man-3335553-2790260.png" // Fallback placeholder
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden py-4 border-t border-gray-200">
            <div className="flex items-center px-2">
              <span className="font-[Manjari] text-xl font-extralight text-gray-500 uppercase">Kanoa Store</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
