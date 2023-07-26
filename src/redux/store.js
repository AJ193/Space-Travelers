import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragons/dragonsSlice';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    dragons: dragonReducer,
    missions: missionReducer,
  },
});

export default store;
