/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
   citySelector,
   clearCart,
   couponSelector,
   discountAmountSelector,
   grandTotalSelector,
   orderedProductSelector,
   orderSelector,
   shippingAddressSelector,
   shippingCostSelector,
   subTotalSelector,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createOrder } from "@/services/Cart";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const PaymentDetails = () => {
   const Subtotal = useAppSelector(subTotalSelector);
   const shippingCost = useAppSelector(shippingCostSelector);
   const discountAmount = useAppSelector(discountAmountSelector);
   const grandTotal = useAppSelector(grandTotalSelector);
   const order = useAppSelector(orderSelector);
   const city = useAppSelector(citySelector);
   const shippingAddress = useAppSelector(shippingAddressSelector);
   const CartProducts = useAppSelector(orderedProductSelector);
   const coupon = useAppSelector(couponSelector);

   const user = useUser();

   const router = useRouter();

   const dispatch = useAppDispatch();

   const handleOrder = async () => {
      console.log("order", order);
      const orderLoading = toast.loading("Order is being placed");
      try {
         if (!user.user) {
            router.push("/login");
            throw new Error("Please login first");
         }
         if (!city) {
            throw new Error("City is missing");
         }
         if (!shippingAddress) {
            throw new Error("Shipping Address is missing");
         }
         if (CartProducts.length === 0) {
            throw new Error("Cart is empty !! What are you trying to order ");
         }
         let orderData;
         if (coupon.code) {
            orderData = { ...order, coupon: coupon.code };
         } else {
            orderData = order;
         }

         const res = await createOrder(orderData);
         if (res.success) {
            toast.success(res.message, { id: orderLoading });
            dispatch(clearCart());
            router.push(res.data.paymentUrl);
         }
         if (!res.success) {
            toast.error(res.message, { id: orderLoading });
         }

         console.log(res);
      } catch (error: any) {
         console.log(error);
         toast.error(error.message, { id: orderLoading });
      }
   };

   return (
      <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
         <h1 className="text-2xl font-bold">Payment Details</h1>
         {coupon.isLoading && <div>Loading...</div> }
         {!coupon.isLoading && (
            <>
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
                     <p className="font-semibold">
                        {currencyFormatter(discountAmount)}
                     </p>{" "}
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
               </div>{" "}
            </>
         )}
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
