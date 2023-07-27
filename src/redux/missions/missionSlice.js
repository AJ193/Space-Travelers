import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissionData = createAsyncThunk(
  'missions/getMissionItems',
  async (thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const JOIN_MISSION = 'missions/joinMission';

export const joinMission = (missionId) => ({
  type: JOIN_MISSION,
  payload: missionId,
});

const initialState = {
  missionItem: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missionItem = state.missionItem.map((mission) => (
        mission.mission_id === missionId ? { ...mission, reserved: true } : mission
      ));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissionData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissionData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missionItem = action.payload;
      })
      .addCase(getMissionData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default missionSlice.reducer;
