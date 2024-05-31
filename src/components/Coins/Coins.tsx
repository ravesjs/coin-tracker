import React, { useState, useEffect } from 'react'
import { Coin, ICoin } from '@/components/Coin/Coin'
import axios from 'axios'
import Layout from '@/pages/Layout/Layout'

const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets',
  params: { vs_currency: 'usd', locale: 'en' },
  headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-uyjDvrr6SRJ5djBo4D8x1dRB' },
}

// TODO: typify to fix dep components
const Coins = function () {
  const [coins, setCoins] = useState<ICoin[]>([])
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setCoins(response.data)
      })
      .catch(function (error) {
        console.error('Failed to get coins', error)
      })
  }, [])

  return (
    <Layout>
      {coins.map((coin: ICoin) => (
        <Coin key={coin.id} {...coin} />
      ))}
    </Layout>
  )
}

export default Coins
