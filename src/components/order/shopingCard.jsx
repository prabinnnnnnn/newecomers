"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function ShoppingCart() {
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-3" title="Cart">
          <div className="relative">
            <ShoppingBag />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[0.6rem] leading-3 font-bold rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md border-l p-4">
        <SheetHeader className="space-y-2.5 pb-6">
          <SheetTitle className="text-xl font-medium text-left">My Cart</SheetTitle>
        </SheetHeader>

        <div className="grid grid-rows-3 h-[92%]">
          <div className="flex-1 overflow-auto gap-y-2 row-span-2 ">
            <div className="border-b border-gray-200 dark:border-gray-800 pb-6 mb-6 p-2">
              <div className="flex gap-4">
                <div className="relative">
                  <SheetClose asChild>
                    <button
                      className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-gray-800 hover:bg-gray-700 p-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </SheetClose>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-04%2009-46-06-aBSkEEzp34gy7M4f74rZajtQ9mgrJ2.png"
                    alt="Acme T-Shirt"
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Acme T-Shirt</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Blue / S</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-4 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="font-medium">$15.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-800 pb-6 mb-6 p-2">
              <div className="flex gap-4">
                <div className="relative">
                  <SheetClose asChild>
                    <button
                      className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-gray-800 hover:bg-gray-700 p-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </SheetClose>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-04%2009-46-06-aBSkEEzp34gy7M4f74rZajtQ9mgrJ2.png"
                    alt="Acme T-Shirt"
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Acme T-Shirt</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Blue / S</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-4 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="font-medium">$15.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-800 pb-6 mb-6 p-2">
              <div className="flex gap-4">
                <div className="relative">
                  <SheetClose asChild>
                    <button
                      className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-gray-800 hover:bg-gray-700 p-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </SheetClose>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-04%2009-46-06-aBSkEEzp34gy7M4f74rZajtQ9mgrJ2.png"
                    alt="Acme T-Shirt"
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Acme T-Shirt</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Blue / S</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-4 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="font-medium">$15.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-auto">
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Taxes</span>
              <span>$0.00 USD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Shipping</span>
              <span className="text-gray-500 dark:text-gray-400">Calculated at checkout</span>
            </div>
            <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
              <span>Total</span>
              <span className="font-medium">$15.00 USD</span>
            </div>
            <SheetFooter className="mt-6">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">Proceed to Checkout</Button>
            </SheetFooter>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/*           
          <div className="flex-1 overflow-auto">
            <div className="border-b border-gray-200 dark:border-gray-800 pb-6 mb-6">
              <div className="flex gap-4">
                <div className="relative">
                  <SheetClose asChild>
                    <button
                      className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-gray-800 hover:bg-gray-700 p-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </SheetClose>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-04%2009-46-06-aBSkEEzp34gy7M4f74rZajtQ9mgrJ2.png"
                    alt="Acme T-Shirt"
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Acme T-Shirt</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Blue / S</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-4 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="font-medium">$15.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-4 mt-auto">
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Taxes</span>
              <span>$0.00 USD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Shipping</span>
              <span className="text-gray-500 dark:text-gray-400">Calculated at checkout</span>
            </div>
            <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
              <span>Total</span>
              <span className="font-medium">$15.00 USD</span>
            </div>
          </div> */
