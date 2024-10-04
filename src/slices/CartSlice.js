import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cartData',
  initialState: {
    value: JSON.parse(localStorage.getItem('cartData'))? JSON.parse(localStorage.getItem('cartData')): null,
  },
  reducers: {
    cartData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { cartData } = CartSlice.actions

export default CartSlice.reducer