import { createSlice } from "@reduxjs/toolkit";
import { addFavorites, deleteFavorite } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPending = (state) => {
  state.isLoading = true;
};

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFavorites.rejected, isRejected)
      .addCase(addFavorites.pending, isPending)
      .addCase(addFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload?.teacherId
        );
      })
      .addCase(deleteFavorite.rejected, isRejected);
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { setFavorites } = favoritesSlice.actions;
