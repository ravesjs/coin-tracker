import React from 'react'
import styles from './Header.module.css'
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import { useFavorites } from '@/hooks/useFavorites'

function Header() {
  const { favorites } = useFavorites()

  return (
    
    <header className={styles.header}>
      <CurrencyBitcoinRoundedIcon className={styles.icon}/>
      <span>{favorites.length}</span>
    </header>
  )
}

export default Header
