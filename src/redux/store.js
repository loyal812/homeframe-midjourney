import { configureStore } from "@reduxjs/toolkit";
// import { generalReducer, onboardingReducer, userReducer } from "./index";
import { generalReducer, midjourneyReducer } from "./index";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    general: generalReducer,
    midjourney: midjourneyReducer
    // onboarding: onboardingReducer,
  },
});
