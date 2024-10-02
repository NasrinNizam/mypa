import { createSlice } from '@reduxjs/toolkit'

export const WishListSlice = createSlice({
  name: 'counterWishList',
  initialState: {
    wishValue:  JSON.parse(localStorage.getItem('wishListData')) || [],
  },
  reducers: {
    addWishData: (state, action) => {
        state.wishValue = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { addWishData } = WishListSlice.actions

export default WishListSlice.reducer