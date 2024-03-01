import React, {useState, useEffect} from 'react'
import styles from './Header.css'
import logo from '../../../public/webpack-icon.svg'


function Header() {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000)
    return () => clearInterval(timerId)
  }, [])
  
  function tick() {
    setTime(new Date())
  }
  
  return (
    <header className={styles.header}>
      <img src={logo} alt={'Studying'} />
      <span>Время сейчас: {time.toLocaleTimeString()}</span>
    </header>
  )
}

export default Header
