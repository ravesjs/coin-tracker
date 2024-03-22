import { useActions } from '@/hooks/useActions'
import { useFavorites } from '@/hooks/useFavorites'
import { Rating } from '@mui/material'
import React from 'react'
import styles from './CryptoCoin.module.css'
export default function CryptoCoin({ coin }) {
  const { favorites } = useFavorites()

  const { toggleFavorites } = useActions()
  const isExists = favorites.some((c) => c.id === coin.id)

  const handleChange = (value) => {
    toggleFavorites(coin)
  }
  console.log(favorites)
  return (
    <div className={styles.container}>
      <Rating
        name={`rating-${coin.id}`}
        value={isExists ? 1 : 0}
        max={1}
        onChange={(event, value) => {
          handleChange(value)
        }}
      />
      <h3>{coin.name}</h3>
    </div>
  )
}
