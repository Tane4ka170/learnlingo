const selectTeachers = (state) => state.teachers.items;

const selectIsLoading = (state) => state.teachers.isLoading;

const selectError = (state) => state.teachers.error;

const selectFavorites = (state) => state.favorites.items;

const selectIsLoadingFav = (state) => state.favorites.isLoading;

const selectErrorFav = (state) => state.favorites.error;

export {
  selectTeachers,
  selectIsLoading,
  selectError,
  selectFavorites,
  selectIsLoadingFav,
  selectErrorFav,
};
