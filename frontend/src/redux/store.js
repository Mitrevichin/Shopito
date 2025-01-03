import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/features/auth/authSlice';
import productReducer from '../redux/features/product/productSlice';
import categoryReducer from '../redux/features/categoryAndBrand/categoryAndBrandSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
  },
});
