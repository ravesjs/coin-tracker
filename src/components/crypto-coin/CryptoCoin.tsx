import { useActions } from '@/hooks/useActions'
import { useFavorites } from '@/hooks/useFavorites'
import { Rating } from '@mui/material'
import React, { FC } from 'react'
import styles from './CryptoCoin.module.css'

export interface ICoin {
  name: string
  id: number
}

export const CryptoCoin: FC<ICoin> = (coin) => {
  const { favorites } = useFavorites()

  const { toggleFavorites } = useActions()
  const isExists = favorites.some((c: ICoin) => c.id === coin.id)

  const handleChange = (value: number | null) => {
    toggleFavorites(coin)
  }
  console.log(favorites)
  return (
    <div className={styles.container}>
      <Rating
        name={`rating-${coin.id}`}
        value={isExists ? 1 : 0}
        max={1}
        onChange={(e, value) => {
          handleChange(value)
        }}
      />
      <h3>{coin.name}</h3>
    </div>
  )
}
