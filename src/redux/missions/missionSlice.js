import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissionData = createAsyncThunk(
  'missions/getMissionItems',
  async (thunkAPI) => {
    try {
      const res = await fetch(url);
      return res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const JOIN_MISSION = 'missions/joinMission';
export const LEAVE_MISSION = 'missions/leaveMission';

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
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missionItem = state.missionItem.map((mission) => (
        mission.mission_id === missionId ? { ...mission, reserved: false } : mission
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
        const data = Object.keys(action.payload).map((mission) => {
          const obj = {
            mission_id: action.payload[mission].mission_id,
            mission_name: action.payload[mission].mission_name,
            description: action.payload[mission].description,
            wikipedia: action.payload[mission].wikipedia,
          };
          return obj;
        });
        state.missionItem = data;
      })
      .addCase(getMissionData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
