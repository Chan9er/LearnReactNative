import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as apiClient from './../../api/apiClient';

const initialState = {
  value: 0,
  users: [],
  loading: false,
  error: true,
  nextPage: 1,
};

export const fetchUsers = createAsyncThunk('fetchUsers', async ({ page }) => {
  const response = await apiClient.fetchUsers(page, 10);
  if (response.kind === 'success') {
    // console.log('testtest response.bodyr', response.body);
    return {
      users: response.body ?? [],
    };
  } else {
    throw 'Error fetching users';
  }
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.nextPage += 1;
        state.users = state.users.concat(action.payload.users);
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, state => {
        state.error = true;
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
