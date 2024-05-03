import React from 'react'
import Favorites from './pages/FavoritesPage'
import App from './App'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  }
])