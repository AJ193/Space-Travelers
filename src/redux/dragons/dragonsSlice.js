import { createSlice } from '@reduxjs/toolkit';

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    dragons: [],
    loading: false,
  },
  reducers: {

  },

});

export default dragonsSlice.reducer;
