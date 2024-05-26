import React, { FC } from 'react'
import { Coin, ICoin } from '@/components/Coin/Coin'
import { useFavorites } from '@/hooks/useFavorites'
import styles from '@/styles/_styles.module.scss'

const Favorites: FC = () => {
  const { favorites } = useFavorites()
  const sorted = [...favorites].sort((a, b) => a.market_cap_rank - b.market_cap_rank)

  return (
    <div className={styles.marginUp}>
      <div className={styles.wrap}>
        <h2>
          <i>#</i>Name
        </h2>
        <h2>Price</h2>
      </div>
      {sorted.map((coin: ICoin) => (
        <Coin key={coin.id} {...coin} />
      ))}
    </div>
  )
}

export default Favorites
