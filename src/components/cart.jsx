import React from "react";
import { useNavigate } from "react-router-dom";
import Rating from "./rating";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Cart = ({ item }) => {
  const navigate = useNavigate();

  const discountedPrice = React.useMemo(() => {
    return item.discountPercentage > 0
      ? (item.price - (item.price * item.discountPercentage) / 100).toFixed(2)
      : item.price.toFixed(2);
  }, [item.price, item.discountPercentage]);

  const handleButtonAddProduct = React.useCallback((e, item) => {
    e.stopPropagation();
    toast(`${item.title} has been added to cart`, {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  }, []);

  const handleProductReview = React.useCallback(() => {
    navigate(`/product`, {
      state: { productDetails: item },
    });
  }, [navigate, item.id]); // Avoid unnecessary re-renders by using item.id instead of entire item object

  return (
    <div
      className="relative w-full max-w-[300px] mx-auto flex flex-col justify-between rounded-md overflow-hidden shadow-lg group cursor-pointer"
      onClick={handleProductReview}
    >
      <div className="absolute z-50 h-full w-full bg-slate-900/10 hidden group-hover:block pointer-events-none"></div>

      <div className="rounded-md p-2 dark:bg-white h-full flex flex-col">
        <div className="relative w-full pt-[100%]">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-contain rounded-t-md"
            style={{
              background: `url('/loading-placeholder.gif') center center / cover no-repeat`,
            }}
            onError={(e) => {
              if (e.target.src !== "/api/placeholder/300/300") {
                e.target.src = "/api/placeholder/300/300";
              }
            }}
          />
        </div>

        <div className="text-black pt-4 flex flex-col flex-grow gap-y-2">
          <div className="flex justify-between items-start">
            <h1 className="font-semibold text-base sm:text-base truncate text-ellipsis">{item.title}</h1>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-4 mb-3">
              {item.discountPercentage > 0 ? (
                <>
                  <span className="text-red-500 font-semibold">${discountedPrice}</span>
                  <span className="text-gray-500 line-through text-base">${item.price}</span>
                </>
              ) : (
                <span className="font-semibold text-base sm:text-sm text-black">${item.price}</span>
              )}
            </div>
            <div className="flex">
              <Rating rating={item.rating.rate} max={5} />
            </div>
          </div>
        </div>

        <Button
          onClick={(e) => handleButtonAddProduct(e, item)}
          className="btn py-3 sm:py-6 rounded-md cursor-pointer text-sm sm:text-base"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Cart, (prevProps, nextProps) => {
  return JSON.stringify(prevProps.item) === JSON.stringify(nextProps.item);
});
