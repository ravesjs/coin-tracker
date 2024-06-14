import { ICoin } from '@/components/Coin/Coin'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ICoin[]  = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: coin }) => {
      const isExists = state.some((c) => c.id === coin.id)
      if (isExists) {
        const index = state.findIndex((c) => c.id === coin.id)
        if (index !== -1) {
          state.splice(index, 1)
        }
      } else {
        state.push(coin)
      }
    },
  },
})

export const { actions, reducer } = favoritesSlice
