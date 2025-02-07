import { Button } from "@/components/ui/button";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Emptycart from "./emptycart";
import { useCart } from "../../context/CartContext";

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export default function ShoppingCart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.06; // 6% tax rate
    const total = subtotal + tax;

    return {
      subtotal,
      tax,
      total,
    };
  };

  const totals = calculateTotals();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-3" title="Cart">
          <div className="relative">
            <ShoppingBag />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[0.6rem] leading-3 font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md border-l p-4">
        <SheetHeader className="space-y-2.5 pb-6">
          <SheetTitle className="text-2xl font-semibold text-left">
            My Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 items-center justify-center h-[92%]">
            <Emptycart />
          </div>
        ) : (
          <div className="grid grid-rows-4 sm:grid-rows-3 h-[92%] gap-y-2">
            <div className="flex-1 overflow-auto row-span-3 sm:row-span-2 overflow-y-scroll">
              {cartItems.map((item) => (
                <div className="border-b p-2 py-4" key={item.id}>
                  <div className="flex gap-4">
                    <div className="relative">
                      <Button
                        title="remove"
                        variant="destructive"
                        className="absolute -left-2 -top-2 h-6 w-6 rounded-full p-1"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <img
                        src={item.image}
                        alt={item.title}
                        width={70}
                        height={70}
                        className="rounded-md object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                        {item.variant || "Blue / S"}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Button
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>

                          <span className="w-4 text-center flex justify-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <span className="font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-auto border-t pt-4">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Subtotal
                </span>
                <span>{formatPrice(totals.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Tax (6%)
                </span>
                <span>{formatPrice(totals.tax)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Shipping
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  Calculated at checkout
                </span>
              </div>
              <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                <span className="font-medium">Total</span>
                <span className="font-medium">{formatPrice(totals.total)}</span>
              </div>
              <SheetFooter className="mt-6">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
                  onClick={() => {
                    // Add checkout logic here
                  }}
                >
                  Proceed to Checkout
                </Button>
              </SheetFooter>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
