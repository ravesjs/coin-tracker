import React from 'react'
import styles from '@/styles/_styles.module.scss'
import Coins from '@/components/Coins/Coins'

function Home() {
  return (
    <>
      <div className={styles.wrap}>
        <h2>
          <i>#</i>Name
        </h2>
      </div>
      <section>
        <Coins />
      </section>
    </>
  )
}

export default Home
