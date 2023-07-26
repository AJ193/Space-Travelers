import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDragons = createAsyncThunk("dragons/getDragons", async () => {
  const response = await axios.get("https://api.spacexdata.com/v3/dragons");
  return response.data;
});

export const dragonsSlice = createSlice({
  name: "dragons",
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
      .addCase(getDragons.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.dragons = payload.map((load) => ({
          id: load.id,
          name: load.name,
          type: load.type,
          flickr_images: load.flickr_images,
          reserved: false,
        }));
      })
      .addCase(getDragons.rejected, (state) => {
        state.dragons = false;
      });
  },
});

export const { updateDragon, cancelDragon } = dragonsSlice.actions;

export default dragonsSlice.reducer;
