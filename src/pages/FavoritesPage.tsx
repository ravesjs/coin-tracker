import React from 'react'
import { CryptoCoin, ICoin } from '@/components/crypto-coin/CryptoCoin'
import { useFavorites } from '@/hooks/useFavorites'
import Header from '@/components/Header/Header'
import styles from '../styles/_styles.module.scss'

const Favorites = () => {
  const { favorites } = useFavorites()

  return (
    <>
      <Header />
      <div className={styles.marginUp}>
      <div className={styles.wrap}>
      <h2><i>#</i>Name</h2><h2>Price</h2>
      </div>
      {favorites.map((coin: ICoin) => (
        <CryptoCoin
          key={coin.id}
          id={coin.id}
        />
      ))}
      </div>
    </>
  )
}

export default Favorites
