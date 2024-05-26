/* eslint-disable camelcase */
import { useActions } from '@/hooks/useActions'
import { useFavorites } from '@/hooks/useFavorites'
import { Rating } from '@mui/material'
import React, { FC } from 'react'
import styles from './Coin.module.css'

export interface ICoin {
  id: string
  name: string
  image: string
  current_price: number
  market_cap_rank: number
}

export const Coin: FC<ICoin> = (coin) => {
  const { favorites } = useFavorites()
  const { toggleFavorites } = useActions()
  const { id, name, image, current_price, market_cap_rank } = coin
  const isExists = favorites.some((c: ICoin) => c.id === coin.id)

  const handleChange = () => {
    toggleFavorites(coin)
  }
  
  return (
    <div className={styles.container}>
      <Rating
        name={`rating-${id}`}
        value={isExists ? 1 : 0}
        max={1}
        onChange={() => {
          handleChange()
        }}
      />
      <span>{market_cap_rank}</span>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <span>{current_price}$</span>
    </div>
  )
}
