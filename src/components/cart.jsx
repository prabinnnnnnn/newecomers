import React from "react";

const Cart = ({ item }) => {
  // Memoize the price calculation
  const discountedPrice = React.useMemo(() => {
    return Math.round(item.price - (item.price * item.discountPercentage) / 100).toFixed(2);
  }, [item.price, item.discountPercentage]);

  const buttonClick = React.useCallback(() => {
    console.log("click");
  }, []);

  return (
    <div className="relative w-[300px] h-auto mx-auto flex flex-col justify-between shadow group">
      {/* Overlay */}
      <div className="absolute z-50 h-full w-full bg-slate-900/20 hidden group-hover:block pointer-events-none"></div>

      {/* Card Content */}
      <div className="rounded-md p-2 dark:bg-white bg-gray-800 h-full flex flex-col">
        <img
          src={item.images}
          alt={item.title}
          loading="lazy"
          className="w-full h-[300px] object-cover rounded-t-md"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/api/placeholder/300/300"; // Fallback image
          }}
        />

        {/* Product Details */}
        <div className="text-black pt-2 flex flex-col flex-grow gap-y-2">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg truncate text-ellipsis">{item.title}</h1>
          </div>
          <div className="flex gap-x-4 mb-2">
            <span className="font-semibold text-lg text-black/75 line-through decoration-[#ff0000] decoration-2">
              ${item.price}
            </span>
            <span className="font-semibold text-lg">${discountedPrice}</span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={buttonClick}
          className="text-white w-full bg-black py-3 rounded-md cursor-pointer hover:bg-black/80 transition-colors"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

// Memoize the component with custom comparison
export default React.memo(Cart, (prevProps, nextProps) => {
  return (
    prevProps.item.id === nextProps.item.id &&
    prevProps.item.price === nextProps.item.price &&
    prevProps.item.discountPercentage === nextProps.item.discountPercentage
  );
});
