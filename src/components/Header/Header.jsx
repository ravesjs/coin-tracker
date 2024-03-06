import React from 'react'
import styles from './Header.module.css'
import { AiFillDollarCircle } from 'react-icons/ai'
import { useFavorites } from '@/hooks/useFavorites'

function Header() {
 const {favorites} = useFavorites()

  return (
    <header className={styles.header}>
      <AiFillDollarCircle className={styles.icon}/>
      <span>{favorites.length}</span>
    </header>
  )
}

export default Header
