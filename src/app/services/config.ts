import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBPqfWFX9tTOBLeoqOT0rfAxJFELK-0iZs',
  authDomain: 'app-02-2ef4b.firebaseapp.com',
  databaseURL: 'https://app-02-2ef4b-default-rtdb.firebaseio.com',
  projectId: 'app-02-2ef4b',
  storageBucket: 'app-02-2ef4b.firebasestorage.app',
  messagingSenderId: '653778739876',
  appId: '1:653778739876:web:1e2beb3d628e2bc9293c31',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
