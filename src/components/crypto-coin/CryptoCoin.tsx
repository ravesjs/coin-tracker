import { useActions } from '@/hooks/useActions'
import { useFavorites } from '@/hooks/useFavorites'
import { Rating } from '@mui/material'
import React, { FC } from 'react'
import styles from './CryptoCoin.module.css'

export interface ICoin {
  id: string
  name: string
  image: string
  current_price: number
  market_cap_rank: number
}

export const CryptoCoin: FC<ICoin> = (coin) => {
  const { favorites } = useFavorites()
  const { toggleFavorites } = useActions()
  const isExists = favorites.some((c: ICoin) => c.id === coin.id)

  const handleChange = () => {
    toggleFavorites(coin)
  }
  console.log(favorites)
  return (
    <div className={styles.container}>
      <Rating
        name={`rating-${coin.id}`}
        value={isExists ? 1 : 0}
        max={1}
        onChange={() => {
          handleChange()
        }}
      />
      <span>{coin.market_cap_rank}</span>
      <img src={coin.image} alt={coin.name} />
      <h4>{coin.name}</h4>
      <span>{coin.current_price}$</span>
    </div>
  )
}