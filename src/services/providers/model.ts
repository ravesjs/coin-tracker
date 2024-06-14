/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEvent, createStore } from 'effector'
import { ICoin } from '@/components/Coin/Coin'

const initialState: ICoin[] = []

export const toggleFavorites = createEvent<ICoin>()

export const $favorites = createStore(initialState).on(toggleFavorites, (state, coin) => {
  const isExists = state.some((c) => c.id === coin.id)
  if(isExists) {
    return state.filter((c) => c.id !== coin.id)
  } else {
    return [...state, coin]
  }
})