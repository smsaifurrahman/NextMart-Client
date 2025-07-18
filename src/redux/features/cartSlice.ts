/** @format */

import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartProduct extends IProduct {
   orderQuantity: number;
}

interface InitialState {
   products: CartProduct[];
}

const initialState: InitialState = {
   products: [],
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addProduct: (state, action) => {
         const productToAdd = state.products.find(
            (product) => product._id === action.payload._id
         );

         if (productToAdd) {
            productToAdd.orderQuantity += 1;

            return;
         }

         state.products.push({ ...action.payload, orderQuantity: 1 });
      },
      incrementOrderQuantity: (state, action) => {
         const productToIncrement = state.products.find(
            (product) => product._id === action.payload
         );
         if (productToIncrement) {
            productToIncrement.orderQuantity += 1;
            return;
         }
      },
      decrementOrderQuantity: (state, action) => {
         const productToIncrement = state.products.find(
            (product) => product._id === action.payload
         );
         if (productToIncrement && productToIncrement.orderQuantity > 1) {
            productToIncrement.orderQuantity -= 1;
            return;
         }
      },
      removeOrderQuantity: (state, action) => {
         state.products = state.products.filter(
            (product) => product._id != action.payload
         );
      },
   },
});

export const orderedProductSelector = (state: RootState) => {
   return state.cart.products;
};

export const subTotalSelector = (state: RootState) => {
   return state.cart.products.reduce((acc, product) => {
      if (product.offerPrice) {
         return acc + product.offerPrice * product.orderQuantity;
      } else {
         return acc + product.price * product.orderQuantity;
      }
   }, 0);
};

export const {
   addProduct,
   incrementOrderQuantity,
   decrementOrderQuantity,
   removeOrderQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
