import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";
import effectReducer from "./EffectSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    effect: effectReducer,
  },
});
