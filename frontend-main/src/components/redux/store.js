import {  configureStore } from '@reduxjs/toolkit';
import {
 
  userReducer,
} from './reducer/userReducer.js';



export const store = configureStore({
  reducer: {
    user: userReducer
    
  },
 
  
});


