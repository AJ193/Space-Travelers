import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragons/dragonsSlice';
import missionReducer from './missions/missionSlice';
import rocketsReducer from './rocket/rocketsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonReducer,
    missions: missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
