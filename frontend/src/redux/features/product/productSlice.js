import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import productService from './ProductService';

// Create Product
export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (formData, thunkAPI) => {
    try {
      return await productService.createProduct(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  product: null,
  products: [],
  minPrice: null,
  maxPrice: null,
  totalStoreValue: 0,
  outOfStock: 0,
  category: [],

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Create Product
      .addCase(createProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.products = action.payload;
        toast.success('Product successfully created');
        console.log(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
