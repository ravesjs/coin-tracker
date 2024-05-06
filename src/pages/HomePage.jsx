import React from 'react'
import Header from '@/components/Header/Header'
import styles from '@/styles/index.scss'
import Favorites from './FavoritesPage'

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2># Name</h2>
        <section>
					<Favorites />
				</section>
      </main>
    </>
  )
}

export default Home
