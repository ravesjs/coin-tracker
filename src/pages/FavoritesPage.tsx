/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { CryptoCoin } from '@/components/crypto-coin/CryptoCoin'
import { useFavorites } from '@/hooks/useFavorites'

const Favorites = () => {
  const { favorites } = useFavorites()

  return (
    <>
      {favorites.map((coin: any) => (
        <CryptoCoin key={coin.id} id={coin.id} name={coin.name} />
      ))}
    </>
  )
}

export default Favorites
