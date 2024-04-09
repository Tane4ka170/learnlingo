import { configureStore } from "@reduxjs/toolkit";
import { teacherReducer } from "./teachers/teachersSlice";
import { favoritesReducer } from "./favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    teachers: teacherReducer,
    favorites: favoritesReducer,
  },
});
