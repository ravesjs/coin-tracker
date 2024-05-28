import React, { ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './Header.module.scss'
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded'
import { useFavorites } from '@/hooks/useFavorites'

function Header(): ReactNode {
  const { favorites } = useFavorites()
  const moreThanOne = favorites.length >= 1

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
          <span className={moreThanOne ? styles.counter : ''}>
            {moreThanOne && favorites.length}
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
