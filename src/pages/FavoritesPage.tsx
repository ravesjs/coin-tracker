import React from 'react'
import { Coin } from '@/components/Coin/Coin'
import { useFavorites } from '@/hooks/useFavorites'
import Layout from './Layout/Layout'

function Favorites() {
  const { favorites } = useFavorites()
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
