import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missionItem: [
    {
      mission_id: 1,
      mission_name: 'Mission 1',
      description: `Thaicom is the name of a series of communications satellites operated from Thailand,
        and also the name of Thaicom Public Company Limited,
        which is the company that owns and operates the Thaicom satellite
        fleet and other telecommunication businesses in Thailand and throughout
        the Asia-Pacific region. The satellite projects were named Thaicom by the
        King of Thailand, His Majesty the King Bhumibol Adulyadej,
        as a symbol of the linkage between Thailand and modern
        communications technology.`,
    },
  ],
  isLoading: false,

};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
});

console.log(missionSlice);

export default missionSlice.reducer;
