import React, { useState, useEffect } from "react";
import { ArrowLeft, Bookmark } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Rating from "@/components/layouts/Rating";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedImage, setSelectedImage] = useState(0);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!state?.productDetails) {
    navigate("/", { replace: true });
    return null;
  }

  const handleBack = () => navigate(-1);
  const handleAddToCart = () => {
    toast(state.productDetails.title, {
      description: "Added to your bag",
      className: "bg-gray-900 text-white font-semibold shadow-lg",
    });
  };

  const colors = [
    { id: "black", color: "bg-black" },
    { id: "white", color: "bg-white border-2" },
    { id: "blue", color: "bg-blue-500" },
    { id: "pink", color: "bg-pink-500" },
    { id: "yellow", color: "bg-yellow-500" },
  ];

  const images = [
    state.productDetails.image,
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Button variant="outline" onClick={handleBack}>
        <ArrowLeft />
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={images[selectedImage]}
              alt={state.productDetails.title}
              className="w-full h-full object-contain scale-75"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                className={`aspect-square  rounded-lg overflow-hidden border
                  ${selectedImage === index ? "ring-2 ring-blue-500" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img}
                  alt={`Product thumbnail ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{state.productDetails.title}</h1>
            <p className="text-2xl mt-2 opacity-80">
              $ {state.productDetails.price.toFixed(2)}{" "}
            </p>
          </div>

          <div className="flex items-center">
            <Rating rating={state.productDetails.rating.rate}></Rating>
          </div>

          <p className="text-gray-600">{state.productDetails.description}</p>

          <div className="space-y-4">
            <p className="font-medium">Color</p>
            <div className="flex space-x-4">
              {colors.map((color) => (
                <button
                  title={color.id}
                  key={color.id}
                  className={`w-8 h-8 rounded-full ${color.color}
                    ${
                      selectedColor === color.id
                        ? "ring-2 ring-offset-2 ring-blue-500"
                        : ""
                    }`}
                  onClick={() => setSelectedColor(color.id)}
                />
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <Button className="flex-1 p-6 rounded-md" onClick={handleAddToCart}>
              Add to bag
            </Button>
            <button
              className="border rounded-md p-2 px-4 flex items-center justify-center transition"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Bookmark
                size={22}
                className={`transition ${
                  isFavorite ? "fill-black/80 text-black/80" : "text-black/80"
                }`}
              />
            </button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {["Features", "Care", "Shipping", "Returns"].map((section) => (
              <AccordionItem key={section} value={section}>
                <AccordionTrigger>
                  <div className="py-3">{section}</div>
                </AccordionTrigger>
                <AccordionContent>
                  {section} content goes here.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
