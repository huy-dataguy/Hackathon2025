import { configureStore } from '@reduxjs/toolkit'
import foodApi from './features/dish/foodApi'
export const store = configureStore({
  reducer: {
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
  

})