import React, { useState, useEffect, FC } from 'react'
import { CryptoCoin, ICoin } from '@/components/crypto-coin/CryptoCoin'
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets',
  params: { vs_currency: 'usd', locale: 'en' },
  headers: { accept: 'application/json' },
}

// TODO: typify to fix dep components
const Coins: FC = () => {
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
    <>
      {coins.map((coin: ICoin) => (
        <CryptoCoin key={coin.id} id={coin.id} />
      ))}
    </>
  )
}

export default Coins
