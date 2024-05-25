import React from 'react'
import Home from '@/pages/HomePage'
import Favorites from '@/pages/FavoritesPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header/Header'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
