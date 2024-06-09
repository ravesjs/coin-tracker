/* eslint-disable camelcase */
import { Rating } from '@mui/material'
import React, { FC } from 'react'
import styles from './Coin.module.css'
import { useFavorites } from '@/hooks/useFavorites'
import { toggleFavorites } from '@/services/providers/favorites/favorites'

export interface ICoin {
  id: string
  name: string
  image: string
  current_price: number
  market_cap_rank: number
}

export const Coin: FC<ICoin> = (coin) => {
  const { favorites } = useFavorites()
  const { id, name, image, current_price, market_cap_rank } = coin
  const isExists = favorites.some((c: ICoin) => c.id === coin.id)

  const onFav = () => {
    toggleFavorites(coin)
  }
  
  return (
    <tr className={styles.container}>
      <td>
      <Rating
        name={`rating-${id}`}
        value={isExists ? 1 : 0}
        max={1}
        onChange={onFav}
      />
      </td>
      <td><p>{market_cap_rank}</p></td>
      <td><img src={image} alt={name} /></td>
      <td><h4>{name}</h4></td>
      <td><p>{current_price}$</p></td>
    </tr>
  )
}
