import { createSlice } from "@reduxjs/toolkit";
import Product from "../../Models/Product";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    allProducts: [] as Product[],
    total: 0,
  },
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.allProducts.push(action.payload);
        state.total += action.payload.product.price;
      },
      prepare(product: Product): any {
        return {
          payload: {
            product: product,
          },
        };
      },
    },
    removeProcduct: (state, action) => {},
    applyReduction: (state, action) => {},
  },
});

export const { addProduct, removeProcduct, applyReduction } = cartSlice.actions;
export const cart = (state: any) => state.cart;
export default cartSlice.reducer;
