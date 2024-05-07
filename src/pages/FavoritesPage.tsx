/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { CryptoCoin } from '@/components/crypto-coin/CryptoCoin'
import { useLocation } from 'react-router-dom'
import { useFavorites } from '@/hooks/useFavorites'

interface ICoins {
  id: number
  name: string
}

const Favorites: FC<ICoins> = (coin) => {
  const location = useLocation()
  const { favorites } = useFavorites()
  const coins: ICoins[] = [
    { id: 1, name: 'Bitcoin' },
    { id: 2, name: 'Ethereum' },
    { id: 3, name: 'Cardano' },
  ]
  if (location.pathname === '/favorites') {
    return (
      <>
        {favorites.map((coin: any) => (
          <CryptoCoin key={coin.id} id={coin.id} name={coin.name} />
        ))}
      </>
    )
  }
  return (
    <>
      {coins.map((coin) => (
        <CryptoCoin key={coin.id} id={coin.id} name={coin.name} />
      ))}
    </>
  )
}

export default Favorites
