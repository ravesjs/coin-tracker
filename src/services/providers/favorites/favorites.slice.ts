import { ICoin } from '@/components/Coin/Coin'
import { createSlice } from '@reduxjs/toolkit'

const initialState: any[]  = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: crypto }) => {
      const isExists = state.some((c: ICoin) => c.id === crypto.id)
      if (isExists) {
        const index = state.findIndex((c: ICoin) => c.id === crypto.id)
        if (index !== -1) {
          state.splice(index, 1)
        }
      } else {
        state.push(crypto)
      }
    },
  },
})

export const { actions, reducer } = favoritesSlice
