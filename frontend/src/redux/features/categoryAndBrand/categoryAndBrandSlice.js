import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoryAndBrandService from './categoryAndBrandService';
import { toast } from 'react-toastify';

// Create Category
export const createCategory = createAsyncThunk(
  'category/createCategory',
  async (formData, thunkAPI) => {
    try {
      return await categoryAndBrandService.createCategory(formData);
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
  category: [],

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const categoryAndBrandSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    RESET_CAT(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder
      // Create Category
      .addCase(createCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        // When a category is created successfully, the action is fulfilled, and the server response (which usually contains categort information) is returned as action.payload.
        // state.category = action.payload;
        toast.success('Category created successfully');
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // When the registration fails (e.g., due to validation errors, network issues), the register action is rejected, and the error message is captured in action.payload.
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { RESET_AUTH } = categoryAndBrandSlice.actions;

export default categoryAndBrandSlice.reducer;
