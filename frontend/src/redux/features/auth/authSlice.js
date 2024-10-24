import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import { toast } from 'react-toastify';

// Register User
/*
  When you return a value from the async function in createAsyncThunk, that value is passed as the payload of the action dispatched for the fulfilled case. If the action fails, the error message or data returned is stored in action.payload for the rejected case.
*/
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
        // When a user registers successfully, the register action is fulfilled, and the server response (which usually contains user information) is returned as action.payload.
        state.user = action.payload;
        toast.success('Registration successful');
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        // When the registration fails (e.g., due to validation errors, network issues), the register action is rejected, and the error message is captured in action.payload.
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { RESET_AUTH } = authSlice.actions;
export default authSlice.reducer;
