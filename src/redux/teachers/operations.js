import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, ref } from 'firebase/database';
import { database } from '../../firebase/config';

export const fetchTeachersAsync = createAsyncThunk(
  '/teachers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const teachersRef = ref(database, 'teachers');
      const snapshot = await get(teachersRef);
      const teachersData = [];
      snapshot.forEach(teacherSnapshot => {
        teachersData.push({
          ...teacherSnapshot.val(),
          id: teacherSnapshot.key,
        });
      });
      return teachersData;
    } catch (error) {
      console.error('Error fetching teachers:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
