import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Rating from "./rating";

const Cart = ({ item }) => {
  const navigate = useNavigate();

  const discountedPrice = React.useMemo(() => {
    return item.discountPercentage > 0
      ? (item.price - (item.price * item.discountPercentage) / 100).toFixed(2)
      : item.price.toFixed(2);
  }, [item.price, item.discountPercentage]);

  const handleButtonAddProduct = (e, item) => {
    e.stopPropagation();
    toast(item.title, {
      description: "Item has been added to your cart",
      className: "bg-gray-900 text-white font-semibold shadow-lg",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo clicked"),
      },
    });
  };

  const handleProductReview = () => {
    navigate(`/product`, {
      state: { productDetails: item },
    });
  };

  return (
    <Card
      className="relative w-full max-w-[300px] p-2 mx-auto flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={handleProductReview}
    >
      <CardHeader className="p-0">
        {/* Image with Aspect Ratio */}
        <AspectRatio ratio={1 / 1}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={(e) => (e.target.src = "/api/placeholder/300/300")}
          />
        </AspectRatio>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 p-0 mt-2">
        <CardTitle className="text-base font-semibold truncate">{item.title}</CardTitle>

        {/* Price & Discount */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {item.discountPercentage > 0 ? (
              <>
                <span className="text-red-500 font-semibold">${discountedPrice}</span>
                <span className="text-gray-500 line-through text-sm">${item.price}</span>
              </>
            ) : (
              <span className="text-base font-semibold">${item.price}</span>
            )}
          </div>
          <Rating rating={item.rating.rate} max={5} />
        </div>
      </CardContent>

      <CardFooter className="p-0 mt-2">
        <Button
          onClick={(e) => handleButtonAddProduct(e, item)}
          className="w-full text-sm font-semibold p-3 bg-blue-500 hover:bg-blue-600 transition"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default React.memo(Cart, (prevProps, nextProps) => {
  return JSON.stringify(prevProps.item) === JSON.stringify(nextProps.item);
});
