import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products/productSlice'
import favoriteProductsSlice from './slices/favoriteProducts/favoriteProductsSlice'

export const store = configureStore({
  reducer: {
    productsSlice,
    favoriteProductsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch