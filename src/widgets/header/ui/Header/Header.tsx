import React, { ReactNode } from 'react'
import { Link } from 'atomic-router-react'
import styles from './Header.module.scss'
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded'
import { $favorites } from '@/shared/store/model'
import { useUnit } from 'effector-react'
import { routes } from '@/shared/config/routing'

function Header(): ReactNode {
  const favorites = useUnit($favorites)
  const moreThanOne = favorites.length >= 1

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <CurrencyBitcoinRoundedIcon sx={{ fontSize: 45, color: '#d6ab46' }} />
          </li>
          <Link to={routes.home}>
            <li>Top</li>
          </Link>
          <Link to={routes.favorites}>
            <li>Portfolio</li>
          </Link>
        </ul>
        <span className={moreThanOne ? styles.counter : ''}>{moreThanOne && favorites.length}</span>
      </nav>
    </header>
  )
}

export default Header
