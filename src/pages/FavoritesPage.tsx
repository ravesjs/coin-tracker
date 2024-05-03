import React, { FC } from 'react'
import { CryptoCoin } from '@/components/crypto-coin/CryptoCoin'

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
