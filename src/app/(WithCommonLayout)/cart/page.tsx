import Address from '@/components/modules/cart/address';
import CartProducts from '@/components/modules/cart/CartProducts';
import Coupon from '@/components/modules/cart/Coupon';
import PaymentDetails from '@/components/modules/cart/PaymentDetails';
import ProductBanner from '@/components/modules/products/banner';
import NMContainer from '@/components/ui/core/NMContainer';
import React from 'react';

const CartPage = () => {
    return (
        <NMContainer>
          <ProductBanner title='Cart Page' path='Home - Cart'/>
          <div className='grid grid-cols-12 gap-8 my-5'>
             <CartProducts />
             <Coupon />
             <Address />
             <PaymentDetails />
          </div>
        </NMContainer>
    );
};

export default CartPage;