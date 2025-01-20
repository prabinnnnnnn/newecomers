import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

export default function NavBar() {
  const getSearchVal = (e) => {
    console.log(e.target.value);
  };

  return (
    <header className="shadow-sm w-screen">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center max-sm:hidden">
            <span className=" font-[Manjari] text-xl font-extralight text-gray-500 uppercase">Kanoa store</span>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                onChange={getSearchVal}
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom"
                placeholder="Search for products..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoIosSearch className="text-[1.4rem] text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-8 box-border px-4 max-sm:px-0">
            <a href="#" className="text-gray-700 hover:text-custom relative" title="Card">
              <FaShoppingCart className="fas fa-shopping-cart text-xl" />
              <span className="absolute -top-2 -right-2 bg-custom text-white text-[0.5rem] font-bold rounded-full size-3 bg-gray-700 flex items-center justify-center">
                3
              </span>
            </a>

            <div className="size-8 bg-slate-500 rounded-full overflow-hidden" title="Account">
              <img
                src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <nav className="py-2 h-full max-w-2xl"></nav>
      </div>
    </header>
  );
}
