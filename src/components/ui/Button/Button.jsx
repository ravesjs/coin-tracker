import React from 'react'
import styles from './Button.css'

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>
}
