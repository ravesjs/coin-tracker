import React from 'react'
import Header from './components/Header/Header'
import styles from 'styles/_styles.module.scss'
import Favorites from 'pages/FavoritesPage'

function App() {
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

export default App
