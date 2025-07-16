/** @format */

import { Button } from "@/components/ui/button";

const PaymentDetails = () => {
   return (
      <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
         <h1 className="text-2xl font-bold">Payment Details</h1>
         <div className="space-y-2 mt-4">
            <div className="flex justify-between">
               <p className="text-gray-500">Subtotal</p>
               <p className="font-semibold">$100.00</p> {/* Static value */}
            </div>
            <div className="flex justify-between">
               <p className="text-gray-500">Discount</p>
               <p className="font-semibold">$0.00</p> {/* Static value */}
            </div>
            <div className="flex justify-between">
               <p className="text-gray-500">Shipment Cost</p>
               <p className="font-semibold">$10.00</p> {/* Static value */}
            </div>
         </div>
         <div className="flex justify-between mt-10 mb-5">
            <p className="text-gray-500">Grand Total</p>
            <p className="font-semibold">$110.00</p> {/* Static value */}
         </div>
         <Button
            onClick={() => console.log("Order Now clicked")} // Placeholder function
            className="w-full text-xl font-semibold py-5"
         >
            Order Now
         </Button>
      </div>
   );
};

export default PaymentDetails;
