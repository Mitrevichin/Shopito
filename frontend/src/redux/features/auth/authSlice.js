import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import { toast } from 'react-toastify';

// Register User
export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
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
  isLoggedIn: false,
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    RESET_AUTH(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
    extraReducers: builder => {
      // Register User
      builder
        .addCase(register.pending, state => {
          state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isLoggedIn = true;
          state.user = action.payload;
          toast.success('Registration successful');
        })
        .addCase(register.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.user = null;
          state.message = action.payload;
          toast.error(action.payload);
        });
    },
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
