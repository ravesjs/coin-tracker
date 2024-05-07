import React from 'react'
import Header from '@/components/Header/Header'
import styles from '@/styles/index.scss'
import Coins from '../components/Coins/Coins'

const Home = () => (
    <>
      <Header />
      <main className={styles.main}>
        <h2># Name</h2>
        <section>
          <Coins />
        </section>
      </main>
    </>
  )

export default Home
