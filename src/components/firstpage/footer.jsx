import React from "react";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div>
            <h3>Kanoa</h3>
            <p className="text-gray-400">
              Your one-stop destination for fashion and style. We believe in quality, elegance, and customer
              satisfaction.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>123 Fashion Street</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3"></i>
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">&copy; 2024 Fashion Store. All rights reserved.</p>
            <div className="flex space-x-4"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
