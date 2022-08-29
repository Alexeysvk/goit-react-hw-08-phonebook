import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, logout, refreshCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  iaLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [signUp.rejected](state){
      state.error = "Email adress is already registered or incorrect name";
    },
    [signIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [signIn.rejected](state){
      state.error = "No user with this email or this password wrong!"
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [refreshCurrentUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [refreshCurrentUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  devtools: process.env.NODE_ENV === 'development',
});

export default authSlice.reducer;