import React from 'react'
import { Coin } from '@/entities/coin'
import { $favorites } from '@/entities/favorites'
import { useUnit } from 'effector-react'

const Favorites = () => {
  const favorites = useUnit($favorites)
  const sorted = [...favorites].sort((a, b) => a.market_cap_rank - b.market_cap_rank)

  return (
    <>
      {sorted.map((coin) => (
        <Coin key={coin.id} {...coin} />
      ))}
    </>
  )
}

export default Favorites
