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

// Get Categories
export const getCategories = createAsyncThunk(
  'category/getCategories',
  async (_, thunkAPI) => {
    try {
      return await categoryAndBrandService.getCategories();
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

// Delete Category
export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (slug, thunkAPI) => {
    try {
      return await categoryAndBrandService.deleteCategory(slug);
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
  categories: [],

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
        toast.success('Category successfully created');
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      }),
      builder
        // Get Categories
        .addCase(getCategories.pending, state => {
          state.isLoading = true;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.categories = action.payload;
          // toast.success('Category successfully created');
        })
        .addCase(getCategories.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload);
        }),
      builder
        // Delete Categort
        .addCase(deleteCategory.pending, state => {
          state.isLoading = true;
        })
        .addCase(deleteCategory.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          toast.success(action.payload);
        })
        .addCase(deleteCategory.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload);
        });
  },
});

export const { RESET_AUTH } = categoryAndBrandSlice.actions;

export default categoryAndBrandSlice.reducer;
