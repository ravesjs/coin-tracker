import React, { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './Header.module.scss'
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded'
import { useFavorites } from '@/hooks/useFavorites'

function Header(): ReactNode {
  const { favorites } = useFavorites()

  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <CurrencyBitcoinRoundedIcon sx={{ fontSize: 45, color: '#d6ab46' }} />
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
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}

export default Header
