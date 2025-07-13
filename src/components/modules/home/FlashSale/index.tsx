
/** @format */

import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/NMContainer";
import ProductCard from "@/components/ui/ProductCard";
import { getFlashSaleProducts } from "@/services/FlashSale";
import { IProduct } from "@/types";
import Link from "next/link";
import CountDown from "./CountDown";

const FlashSale = async () => {
   const { data: products } = await getFlashSaleProducts();
   return (
      <div className="bg-white bg-opacity-35 py-10">
         <NMContainer className="my-16">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                  <h2 className="font-bold text-2xl">Falsh Sale</h2>
               <CountDown />
              </div>
               <Link href={"/products"}>
                  <Button variant={"outline"} className="rounded-full ">
                     All Collections
                  </Button>
               </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 my-5">
               {
                  products.slice(0,4)?.map((product: IProduct, idx: number) => (
                     <ProductCard key={idx} product={product} />
                  ))}
            </div>
         </NMContainer>
      </div>
   );
};

export default FlashSale;
