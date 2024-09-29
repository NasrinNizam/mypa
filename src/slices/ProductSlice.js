import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    productDetail: 0,
  },
  reducers: {
    
    details: (state, action) => {
      state.productDetail = action.payload
    },    
  },
})

// Action creators are generated for each case reducer function
export const { details } = ProductSlice.actions

export default ProductSlice