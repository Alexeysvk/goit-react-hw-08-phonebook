import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk('auth/signUp', async values => {
    const { data } = await axios.post('/users/signup', values);
    token.set(data.token);
    return data;
});

export const signIn = createAsyncThunk('auth/signIn', async values => {
    const { data } = await axios.post('/users/login', values);
    console.log(data);
    token.set(data.token);
    return data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
    await axios.post('/users/logout');
    token.unset();
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue(null);
    }
    token.set(savedToken);

    const { data } = await axios.get('/users/current');
    return data;
  },
);