import React, { ReactNode, useEffect, useState } from 'react'
import { Link } from 'atomic-router-react'
import styles from './Header.module.scss'
import { $favorites } from '@/shared/store/model'
import { useUnit } from 'effector-react'
import { routes } from '@/shared/config/routing'
import btc from '@/shared/assets/icons/btc.png'

function Header(): ReactNode {
  const [showCounter, setShowCounter] = useState(false)
  const favorites = useUnit($favorites)

  useEffect(() => {
    setShowCounter(favorites.length >= 1)
  }, [favorites.length])
  
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <div className={styles.wrapper}>
              <img src={btc} alt="btc" />
            </div>
          </li>
          <Link to={routes.home}>
            <li>Top</li>
          </Link>
          <Link to={routes.favorites}>
            <li className={styles.portfolio} >
              Portfolio
              {showCounter && <span className={styles.counter}>{favorites.length}</span>}
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
