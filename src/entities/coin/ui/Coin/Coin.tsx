/* eslint-disable camelcase */
import { Rate } from "antd";
import React, { FC } from 'react'
import styles from './Coin.module.css'
import { toggleFavorites, $favorites } from '@/entities/favorites'
import { useUnit } from 'effector-react'
import { ICoin } from '@/entities/coin'

export const Coin: FC<ICoin> = (coin) => {
  const favorites = useUnit($favorites)
  const { name, image, current_price, market_cap_rank } = coin
  const isExists = favorites.some((c: ICoin) => c.id === coin.id)

  const onFavorite = () => {
    toggleFavorites(coin)
  }

  return (
    <tr className={styles.container}>
      <td>
        <Rate count={1} onChange={onFavorite} value={isExists ? 1 : 0} style={{marginLeft: 25, marginTop: 17, marginRight: -60}} />
      </td>
      <td>
        <p>{market_cap_rank}</p>
      </td>
      <td>
        <img src={image} alt={name} />
      </td>
      <td>
        <h4>{name}</h4>
      </td>
      <td>
        <p>{current_price}$</p>
      </td>
    </tr>
  )
}
