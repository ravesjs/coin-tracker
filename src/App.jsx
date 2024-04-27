import React from 'react'
import Header from './components/Header/Header'
import styles from 'styles/_styles.module.scss'
import CryptoCoin from './components/crypto-coin/CryptoCoin'

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2># Name</h2>
        <section>
          <CryptoCoin
            coin={{
              id: 1,
              name: 'Bitcoin',
            }}
          />
          <CryptoCoin
            coin={{
              id: 2,
              name: 'Ethereum',
            }}
          />
          <CryptoCoin
            coin={{
              id: 3,
              name: 'Cardano',
            }}
          />
        </section>
      </main>
    </>
  )
}

export default App
