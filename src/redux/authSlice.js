import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from './authOperations';

const registerSuccessReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const logInSuccessReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const logOutSuccessReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const refreshSuccessReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, pendingReducer)
      .addCase(register.fulfilled, registerSuccessReducer)
      .addCase(register.rejected, rejectedReducer)
      .addCase(login.pending, pendingReducer)
      .addCase(login.fulfilled, logInSuccessReducer)
      .addCase(login.rejected, rejectedReducer)
      .addCase(logOut.pending, pendingReducer)
      .addCase(logOut.fulfilled, logOutSuccessReducer)
      .addCase(logOut.rejected, rejectedReducer)
      .addCase(refreshUser.pending, pendingReducer)
      .addCase(refreshUser.fulfilled, refreshSuccessReducer)
      .addCase(refreshUser.rejected, rejectedReducer),
});

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;
