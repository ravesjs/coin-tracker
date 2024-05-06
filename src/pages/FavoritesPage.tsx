/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { CryptoCoin } from '@/components/crypto-coin/CryptoCoin'
import { useLocation } from 'react-router-dom'
import { useActions } from '@/hooks/useActions'

interface ICoins {
  id: number
  name: string
}

const Favorites: FC<ICoins> = (coin) => {

  const coins: ICoins[] = [
    { id: 1, name: 'Bitcoin' },
    { id: 2, name: 'Ethereum' },
    { id: 3, name: 'Cardano' },
  ]
  return (
    <>
      {coins.map((coin) => (
        <CryptoCoin key={coin.id} id={coin.id} name={coin.name} />
      ))}
    </>
  )
}

export default Favorites
