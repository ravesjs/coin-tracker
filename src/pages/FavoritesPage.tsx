import React from 'react'
import { Coin } from '@/components/Coin/Coin'
import Layout from './Layout/Layout'
import { $favorites } from '@/services/providers/model'
import { useUnit } from 'effector-react'

function Favorites() {
  const favorites = useUnit($favorites)
  const sorted = [...favorites].sort((a, b) => a.market_cap_rank - b.market_cap_rank)

  return (
    <Layout>
      {sorted.map((coin) => (
        <Coin key={coin.id} {...coin} />
      ))}
    </Layout>
  )
}

export default Favorites
