import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  setLoadingState: false,
  loading: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setLoadingRequest: state => {
      state.setLoadingState = true
    },
    setLoadingSuccess: (state, action) => {
        state.setLoadingState = false;
        state.loading = action.payload;
    },
    setLoadingFailed: (state, action) => {
        state.setLoadingState = false;
    },
  },
});

export const { 
  toggleTheme,
  setLoadingFailed,
  setLoadingRequest,
  setLoadingSuccess
} = generalSlice.actions;

export const setLoading = (state) => async (dispatch) => {

  dispatch(setLoadingRequest());

  try {
      dispatch(setLoadingSuccess(state));
  } catch (error) {
      dispatch(setLoadingFailed());
      throw new Error(error);
  }
}

export const generalReducer = generalSlice.reducer;
