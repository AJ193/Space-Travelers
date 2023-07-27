import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'Rockets/getRockets',
  async () => {
    const res = await fetch(rocketsUrl);
    const rockets = await res.json();
    const rocketsList = rockets.map((rocket) => ({
      id: rocket.rocket_id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      img: rocket.flickr_images,
      reserved: false,
    }));
    return rocketsList;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    reserveRocket: (state, action) => state.map((Rocket) => {
      if (Rocket.id === action.payload) {
        return { ...Rocket, reserved: !Rocket.reserved };
      }
      return Rocket;
    }),
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => action.payload,
  },
});

export const { reserveRocket } = rocketsSlice.actions;
export const selectRockets = (state) => state.rockets;
export const selectState = (state) => state.rockets;
export default rocketsSlice.reducer;
