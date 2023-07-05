import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from './categorySlice';
import cartReducer from './cartSlice'
import brandReducer from './brandSlice'
import authReducer from './authSlice'


export default configureStore({
    reducer: {
        categoriesnav: categoryReducer,
        cart: cartReducer,
        brands: brandReducer,
        auth:authReducer
    },
})





