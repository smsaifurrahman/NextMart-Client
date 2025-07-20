/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
   citySelector,
   grandTotalSelector,
   orderedProductSelector,
   orderSelector,
   shippingAddressSelector,
   shippingCostSelector,
   subTotalSelector,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";

const PaymentDetails = () => {
   const Subtotal = useAppSelector(subTotalSelector);
   const shippingCost = useAppSelector(shippingCostSelector);
   const grandTotal = useAppSelector(grandTotalSelector);
   const order = useAppSelector(orderSelector);
   const city = useAppSelector(citySelector)
   const shippingAddress = useAppSelector(shippingAddressSelector)
   const CartProducts = useAppSelector(orderedProductSelector)
   const handleOrder = () => {
      const orderLoading = toast.loading("Order is being placed")
     try {
      if(!city) {
         throw new Error("City is missing")
      }
      if(!shippingAddress) {
         throw new Error("Shipping Address is missing")
      }
      if(CartProducts.length === 0) {
         throw new Error("Cart is empty !! What are you trying to order ")
      }

      toast.success("Order created successfully", {id: orderLoading})

     } catch(error: any) {
      console.log(error);
      toast.error(error.message, {id: orderLoading})
     }
   };

   return (
      <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
         <h1 className="text-2xl font-bold">Payment Details</h1>
         <div className="space-y-2 mt-4">
            <div className="flex justify-between">
               <p className="text-gray-500">Subtotal</p>
               <p className="font-semibold">
                  {currencyFormatter(Subtotal)}
               </p>{" "}
               {/* Static value */}
            </div>
            <div className="flex justify-between">
               <p className="text-gray-500">Discount</p>
               <p className="font-semibold">{currencyFormatter(0)}</p>{" "}
               {/* Static value */}
            </div>
            <div className="flex justify-between">
               <p className="text-gray-500">Shipment Cost</p>
               <p className="font-semibold">
                  ${currencyFormatter(shippingCost)}
               </p>{" "}
               {/* Static value */}
            </div>
         </div>
         <div className="flex justify-between mt-10 mb-5">
            <p className="text-gray-500">Grand Total</p>
            <p className="font-semibold">
               {currencyFormatter(grandTotal)}
            </p>{" "}
            {/* Static value */}
         </div>
         <Button
            onClick={() => handleOrder()} // Placeholder function
            className="w-full text-xl font-semibold py-5"
         >
            Order Now
         </Button>
      </div>
   );
};

export default PaymentDetails;
