import React from 'react'
import styles from './Button.module.css'

interface IButtonProps {
  children: string
}

const Button = ({ children }: IButtonProps) => {
  <button className={styles.button}>{children}</button>
}

export default Button
