import React from "react";
import { ShoppingCartIcon } from "lucide-react";

export default function Emptycart() {
  return (
    <div className="flex flex-col gap-5 space-x-auto space-y-auto items-center justify-center">
      <ShoppingCartIcon className="size-20 animate-bounce" />
      <h1 className="text-3xl">Your cart is empty</h1>
    </div>
  );
}
