import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: crypto }) => {
      const isExists = state.some(c => c.id === crypto.id)
      if (isExists) {
        const index = state.findIndex((item) => item.id === crypto.id)
      if(index !== -1) {
        state.splice(index, 1)
      }
      } else {
        state.push(crypto)
      }
    },
  },
})

export const { actions, reducer } = favoritesSlice
