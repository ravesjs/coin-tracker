import React from 'react'
import Header from './components/Header/Header'
import Button from './components/ui/Button/Button'
import styles from 'styles/_styles.module.scss'

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <h3>Что такое компот?</h3>
          <Button>Не знаю</Button>
          <Button>Знаю</Button>
          <Button>А</Button>
        </section>
        <br />
      </main>
    </>
  )
}

export default App
