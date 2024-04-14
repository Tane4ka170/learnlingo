// import { get, getDatabase, onValue, ref, set } from 'firebase/database';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// // import { setFavorites } from './favoriteSlice';

// const database = getDatabase();

// export const addFavorites = createAsyncThunk(
//   'favorites/addFavorite',
//   async ({ userId, teacher }) => {
//     try {
//       const userFavoritesRef = ref(database, `users/${userId}/favorites`);
//       const existingFavorites = (await get(userFavoritesRef)).val() || {};
//       const updatedFavorites = {
//         ...existingFavorites,
//         [teacher.id]: teacher,
//       };
//       await set(userFavoritesRef, updatedFavorites);
//     } catch (error) {
//       console.error('Error adding favorite:', error);
//       throw error;
//     }
//   }
// );

// export const fetchFavorites = createAsyncThunk(
//   'favorites/fetchFavorites',
//   async (userId, { dispatch }) => {
//     try {
//       const userFavoritesRef = ref(database, `users/${userId}/favorites`);
//       onValue(userFavoritesRef, snapshot => {
//         if (snapshot.exists()) {
//           const favoritesData = snapshot.val();
//           const favoritesArray = Object.values(favoritesData);
//           // dispatch(setFavorites(favoritesArray));
//         } else {
//           // dispatch(setFavorites([]));
//         }
//       });
//     } catch (error) {
//       console.error('Error fetching favorites:', error);
//       throw error;
//     }
//   }
// );

// export const deleteFavorite = createAsyncThunk(
//   'favorites/deleteFavorite',
//   async ({ userId, teacherId }) => {
//     try {
//       const userFavoritesRef = ref(database, `users/${userId}/favorites`);
//       const existingFavorites = (await get(userFavoritesRef)).val() || {};
//       delete existingFavorites[teacherId];
//       await set(userFavoritesRef, existingFavorites);
//     } catch (error) {
//       console.error('Error deleting favorite:', error);
//       throw error;
//     }
//   }
// );
