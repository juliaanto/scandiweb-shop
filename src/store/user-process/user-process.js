import { updateCartList, updateProductQuantity, updateQuantityInCart } from '../action';

const { createReducer } = require('@reduxjs/toolkit')

const initialState = {
  productsInCart: [],
  quantityInCart: 0,
}

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCartList, (state, action) => {
      const {productList} = action.payload;

      state.productsInCart = productList;
    })
    .addCase(updateProductQuantity, (state, action) => {
      const {productIndex, quantity} = action.payload;

      state.productsInCart[productIndex].quantity = quantity;
    })
    .addCase(updateQuantityInCart, (state, action) => {
      const {quantity} = action.payload;

      state.quantityInCart = quantity;
    });
  });

export {userProcess};