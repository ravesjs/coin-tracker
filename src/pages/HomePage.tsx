import React from 'react'
import Header from '@/components/Header/Header'
import styles from '@/styles/index.scss'
import Coins from '../components/Coins/Coins'

const Home = () => (
  <>
    <Header />
    <main className={styles.main}>
      <div className={styles.wrap}>
      <h2><i>#</i>Name</h2><h2>Price</h2>
      </div>
      <section>
        <Coins />
      </section>
    </main>
  </>
)

export default Home
