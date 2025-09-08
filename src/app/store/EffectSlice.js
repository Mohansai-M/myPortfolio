// store/EffectSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enabled: true, // default: effects are on
};

export const effectSlice = createSlice({
  name: "effect",
  initialState,
  reducers: {
    toggleEffect: (state) => {
      state.enabled = !state.enabled;
    },
    setEffect: (state, action) => {
      state.enabled = action.payload; // true or false
    },
  },
});

export const { toggleEffect, setEffect } = effectSlice.actions;
export default effectSlice.reducer;
