import { createSlice } from "@reduxjs/toolkit";

// Defining initial state for the global slice of state
const initialState = {
  mode: "light", // Initial state for the mode (can be "dark" or "light")
  user: null,
  token: null,
  userId: "661b176f43074134fead3149",
};

// Creating a slice of state using createSlice function
export const globalSlice = createSlice({
  name: "global", // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    // Defining reducer functions
    setMode: (state) => {
      // Reducer function to toggle the mode between "dark" and "light"
      state.mode = state.mode === "light" ? "dark" : "light"; // Toggling the mode
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Extracting action creators from the created slice
export const { setMode, setLogin, setLogout } = globalSlice.actions;

// Exporting the reducer function generated by createSlice
export default globalSlice.reducer;
