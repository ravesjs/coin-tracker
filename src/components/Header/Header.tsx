import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded'
import { useFavorites } from '@/hooks/useFavorites'

const Header: FC = (): ReactNode => {
  const { favorites } = useFavorites()

  return (
    <header className={styles.header}>
      <Link to="/favorites">
        <CurrencyBitcoinRoundedIcon className={styles.icon} sx={{ fontSize: 45 }} />
      </Link>
      <span className={favorites.length >=1 ? styles.counter : ''}>{favorites.length >=1 ? favorites.length : '' }</span>
    </header>
  )
}

export default Header
