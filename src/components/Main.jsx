import React, { useEffect, useState } from "react";

const summerImage = [
  {
    image:
      "https://www.dominiquehammer.com/wp-content/uploads/2023/07/230512-PORTRAIT-SW-Miriam-Lookmodels13192_BIG_v2.jpg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
  },
];

const Categories = [
  {
    name: "men",
    image:
      "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "kid",
    image: "https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_1280.jpg",
  },
  { name: "women", image: "https://cdn.pixabay.com/photo/2016/11/18/17/14/cloth-1835894_1280.jpg" },
  { name: "shose", image: "https://cdn.pixabay.com/photo/2021/03/08/12/06/oxford-shoes-6078951_1280.jpg" },
  { name: "shose", image: "https://cdn.pixabay.com/photo/2021/03/08/12/06/oxford-shoes-6078951_1280.jpg" },
  { name: "shose", image: "https://cdn.pixabay.com/photo/2021/03/08/12/06/oxford-shoes-6078951_1280.jpg" },
  { name: "shose", image: "https://cdn.pixabay.com/photo/2021/03/08/12/06/oxford-shoes-6078951_1280.jpg" },
  { name: "shose", image: "https://cdn.pixabay.com/photo/2021/03/08/12/06/oxford-shoes-6078951_1280.jpg" },
  { name: "shose", image: "https://cdn.pixabay.com/photo/2021/03/08/12/06/oxford-shoes-6078951_1280.jpg" },
];

const products = [{}, {}, {}, {}];

export default function Main() {
  const [fashionImage, setFashionImage] = useState(1);

  /*   useEffect(() => {
    const interval = setTimeout(() => {
      setFashionImage((current) => (current + 1) % summerImage.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [fashionImage]); */

  return (
    <main className="overflow-y-scroll">
      <div className="relative max-w-8xl mx-auto mt-2">
        <div className="relative h-[550px] overflow-hidde">
          <img
            src={summerImage[fashionImage].image}
            className="w-full h-full object-cover object-center"
            alt="Fashion Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-transparent flex items-center justify-start  p-20 max-sm:p-2 max-sm:items-end">
            <div className="text-white flex flex-col gap-y-24 max-sm:gap-y-10">
              <div className="flex flex-col gap-y-4">
                <h1 className="text-5xl font-bold max-sm:text-4xl">Summer Collection 2025</h1>
                <p className="text-xl">Discover the latest trends and styles</p>
              </div>
              <button className="!rounded-button text-custom px-8 py-3 w-1/2 font-semibold border hover:bg-gray-100 hover:text-black transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 py-10 max-sm:py-2 overflow-hidden box-border">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 max-sm:mt-4">Featured Categories</h2>

        <div className="relative h-[300px] max-sm:h-[200px] w-auto flex items-center gap-x-10 overflow-x-scroll overflow-y-hidden snap-x box-border">
          {Categories.map((item, index) => {
            return (
              <div
                key={index}
                className="relative h-full w-[25%] max-sm:w-[70%] flex-shrink-0 box-border overflow-hidden group snap-start"
              >
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/50 to-transparent flex justify-start items-start p-2">
                  <div className="h-full w-full text-white max-w-xl flex flex-col justify-between">
                    <h1 className="text-xl font-bold capitalize">{item.name}</h1>
                    <button className="!rounded-button text-custom px-6 py-3 font-semibold border hover:bg-gray-100 hover:text-black transition">
                      Shop Now
                    </button>
                  </div>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full z-0 object-cover transition-transform duration-300 ease-in group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-10  max-sm:py-5">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Special Offers</h2>
            <a href="#" className="text-custom font-semibold hover:text-custom-dark">
              View All
            </a>
          </div>
          <div className="grid grid-cols-4  gap-8 overflow-hidden box-border max-sm:grid-cols-1">
            {Categories.map((item, index) => (
              <div
                key={index}
                className="relative h-[19rem] w-[19rem] max-sm:h[200px] max-sm:w-full bg-black/20 flex-shrink-0 overflow-hidden col-span-1 group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-bold text-lg capitalize">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8 mb-6" />
              <p className="text-gray-400">
                Your one-stop destination for fashion and style. We believe in quality, elegance, and customer
                satisfaction.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
              <div className="flex space-x-4">
                <img src="https://ai-public.creatie.ai/gen_page/visa.png" alt="Visa" className="h-8" />
                <img src="https://ai-public.creatie.ai/gen_page/mastercard.png" alt="Mastercard" className="h-8" />
                <img src="https://ai-public.creatie.ai/gen_page/paypal.png" alt="PayPal" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

/*                 <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex justify-start items-start p-2">
                  <div className=" h-full w-full p-2 text-white max-w-xl flex flex-col justify-between">
                    <h1 className="text-2xl font-bold capitalize">{item.name}</h1>
                    <button className="!rounded-button text-custom px-6 py-3 font-semibold border hover:bg-gray-100 hover:text-black transition">
                      Shop Now
                    </button>
                  </div>
                </div> */
