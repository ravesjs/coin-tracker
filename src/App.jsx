import React from 'react'
import styles from 'styles/_styles.module.scss'
import Home from './pages/HomePage'
import Favorites from 'pages/FavoritesPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  )
}

export default App
