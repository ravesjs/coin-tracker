import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded'
import { useFavorites } from '@/hooks/useFavorites'

const Header: FC = (): ReactNode => {
  const { favorites } = useFavorites()

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <CurrencyBitcoinRoundedIcon className={styles.icon} sx={{ fontSize: 45 }} />
          </li>
          <Link to="/">
            <li>Top</li>
          </Link>
          <Link to="/favorites">
            <li>Portfolio</li>
          </Link>
        </ul>
        <span className={favorites.length >= 1 ? styles.counter : ''}>
          {favorites.length >= 1 ? favorites.length : ''}
        </span>
      </nav>
    </header>
  )
}

export default Header
