import { configureStore } from '@reduxjs/toolkit';
import subRedditReducer from '../features/subRedditSlice/subRedditSlice'
import popularPostReducer from '../features/popularPost/popularPostSlice'
import commentsReducer from '../features/comments/commentsSlice'


export const store = configureStore({
  reducer: {
     popularPost: popularPostReducer,
     subReddit: subRedditReducer,
     comments: commentsReducer
  },
});
