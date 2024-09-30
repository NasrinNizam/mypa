import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slices/UserSlice'
import ProductSlice, { PropertySlice } from './slices/ProductSlice'

export default configureStore({
  reducer: {
    counter: UserSlice,
    counterProperty : ProductSlice,
  },
})