import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDragons = createAsyncThunk('dragons/getDragons', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/dragons');
  const res = response.json();
  // console.log(respon);
  return res;
});

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    dragons: [],
    loading: false,
  },
  reducers: {
    updateDragon: (state, action) => {
      state.dragons = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) {
          return dragon;
        }
        return { ...dragon, reserved: true };
      });
    },
    cancelDragon: (state, action) => {
      state.dragons = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) {
          return dragon;
        }
        return { ...dragon, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDragons.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDragons.fulfilled, (state, action) => {
        // console.log(payload);
        state.loading = false;
        const data = Object.keys(action.payload).map((load) => {
          const obj = {
            id: action.payload[load].id,
            name: action.payload[load].name,
            type: action.payload[load].type,
            flickr_images: action.payload[load].flickr_images,
            reserved: false,
          };
          return obj;
        });
        state.dragons = data;
      })
      .addCase(getDragons.rejected, (state) => {
        state.dragons = false;
      });
  },
});

export const { updateDragon, cancelDragon } = dragonsSlice.actions;

export default dragonsSlice.reducer;
