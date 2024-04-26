import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './features/tab/tabSlice'
import cartReducer from './features/cart/cartSlice'
export const store = configureStore({
  reducer: {
    tab: tabReducer,
    cart: cartReducer
  },
})