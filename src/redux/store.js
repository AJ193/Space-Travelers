import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonReducer,
  },
});

export default store;
