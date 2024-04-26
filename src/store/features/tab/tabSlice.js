import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIndex } = tabSlice.actions

export default tabSlice.reducer