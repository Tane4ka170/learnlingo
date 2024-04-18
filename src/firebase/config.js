import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAzbjN91v8IWAIkQi9j2kP7PaXuCofX6xk',
  authDomain: 'learnlingo-56b2c.firebaseapp.com',
  databaseURL: 'https://learnlingo-56b2c-default-rtdb.firebaseio.com',
  projectId: 'learnlingo-56b2c',
  storageBucket: 'learnlingo-56b2c.appspot.com',
  messagingSenderId: '45829146938',
  appId: '1:45829146938:web:99e545fc416c95a1c2e803',
  measurementId: 'G-1MCP71X14M',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export const auth = getAuth(app);
