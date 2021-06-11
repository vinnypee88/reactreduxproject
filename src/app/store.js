import { configureStore } from '@reduxjs/toolkit';
import popularPostReducer from '../features/popularPost/popularPostSlice'



export const store = configureStore({
  reducer: {
     popularPost: popularPostReducer,
     
  },
});
