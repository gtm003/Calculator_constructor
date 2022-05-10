import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetError(state) {
      console.log(state);
      //
    },
  },
});

export const { resetError } = userSlice.actions;
export default userSlice.reducer;
