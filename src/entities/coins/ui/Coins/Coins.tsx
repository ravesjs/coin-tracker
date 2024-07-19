import React from 'react'
import { Coin } from '@/entities/coin/ui/Coin/Coin'
import { ICoin } from '@/entities/coin'
import { useUnit } from 'effector-react'
import { coinsQuery } from '@/entities/coins/api'

const Coins = function () {
  const coins: ICoin[] | null = useUnit(coinsQuery.$data)
  const isLoading = useUnit(coinsQuery.$pending)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!coins) {
    return <div>No coins available.</div>
  }

  return (
    <>
      {coins.map((coin: ICoin) => (
        <Coin key={coin.id} {...coin} />
      ))}
    </>
  )
}

export default Coins
