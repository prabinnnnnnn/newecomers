import React, { useState } from "react";
import { ArrowLeft, Heart, Plus } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Rating from "../rating";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedImage, setSelectedImage] = useState(0);
  const { state } = useLocation();
  const navigae = useNavigate();

  const handleBack = () => {
    navigae(-1);
  };

  const colors = [
    { id: "black", color: "bg-black" },
    { id: "white", color: "bg-white border-2" },
    { id: "blue", color: "bg-blue-500" },
    { id: "pink", color: "bg-pink-500" },
    { id: "yellow", color: "bg-yellow-500" },
  ];

  const images = ["/api/placeholder/400/400", "/api/placeholder/400/400", "/api/placeholder/400/400"];

  const item = state.productDetails;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Button
        text={"hello"}
        className="flex items-center mb-6 bg-white hover:bg-slate-50 p-2 text-gray-600 hover:text-gray-900 rounded-sm"
        onClick={handleBack}
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain scale-75"
              sizes="(max-width: 240px) 100vw, 240px"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                className={`aspect-square bg-gray-100 rounded-lg overflow-hidden
                  ${selectedImage === index ? "ring-2 ring-blue-500" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`Product thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="text-2xl mt-2">$ {item.price} </p>
          </div>

          <div className="flex items-center">
            <Rating rating={item.rating.rate}></Rating>
          </div>

          <p className="text-gray-600">{item.description}</p>

          <div className="space-y-4">
            <p className="font-medium">Color</p>
            <div className="flex space-x-4">
              {colors.map((color) => (
                <button
                  title={color.id}
                  key={color.id}
                  className={`w-8 h-8 rounded-full ${color.color}
                    ${selectedColor === color.id ? "ring-2 ring-offset-2 ring-blue-500" : ""}`}
                  onClick={() => setSelectedColor(color.id)}
                />
              ))}
            </div>
          </div>

          <div className="flex space-x-4 ">
            <button className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">Add to bag</button>
            <button className="p-3 border rounded-lg hover:bg-gray-50 group">
              <Heart className="w-6 h-6 group-hover:fill-red-600 group-hover:text-red-600" />
            </button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {["Features", "Care", "Shipping", "Returns"].map((section) => (
              <AccordionItem key={section} value={section}>
                <AccordionTrigger>
                  <div className="py-3">{section}</div>
                </AccordionTrigger>
                <AccordionContent>{section} content goes here.</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
