/** @format */

import ProductBanner from "@/components/modules/products/banner";
import ProductDetails from "@/components/modules/products/productDetails";
import NMContainer from "@/components/ui/core/NMContainer";
import { getSingleProduct } from "@/services/Product";

const ProductDetailsPage = async ({
   params,
}: {
   params: Promise<{ productId: string }>;
}) => {
   const { productId } = await params;
   const { data: product } = await getSingleProduct(productId);

   return (
      <NMContainer>
         <ProductBanner
            title="Products Details"
            path="Home - Products - Products Details"
         />
         <ProductDetails product={product} />
      </NMContainer>
   );
};

export default ProductDetailsPage;
