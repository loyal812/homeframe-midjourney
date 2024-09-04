import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  midjourneyImgs: [
    '/assets/img/1.png',
    '/assets/img/2.png',
    '/assets/img/3.png',
  ],
};

const midjourneySlice = createSlice({
  name: "midjourney",

  initialState,
  reducers: {

    setMidjourneyImgs(state, action) {
      return {
        ...state,
        midjourneyImgs: [...action.payload],
      };
    },
  },
});

export const {
  setMidjourneyImgs
} = midjourneySlice.actions;
export const midjourneyReducer = midjourneySlice.reducer;
