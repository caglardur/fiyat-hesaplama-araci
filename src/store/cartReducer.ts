import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

import { singleCartItem, cartState } from "../interfaces"

const initialState: cartState = {
  value: []
}

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<singleCartItem>) => {
      const itemIndex = state.value.findIndex(item => item.id === action.payload.id)
      if (itemIndex === -1) {
        state.value.push(action.payload)
      } else {
        state.value[itemIndex].total += action.payload.total
      }
    },
    removeCart: (state, action: PayloadAction<singleCartItem>) => {
      state.value = state.value.filter(item => item.id !== action.payload.id)
    }
  }
})

export const { addCart, removeCart } = cartReducer.actions

export const selectFilter = (state: RootState) => state.cart.value

export default cartReducer.reducer
