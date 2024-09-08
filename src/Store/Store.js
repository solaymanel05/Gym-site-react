import { configureStore } from '@reduxjs/toolkit';
import bannerSlice from '../Features/bannerSlice';



export const store = configureStore({
  reducer: {
    banner:bannerSlice,
  },
});