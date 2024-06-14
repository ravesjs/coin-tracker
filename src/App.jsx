import React from 'react'
import Home from '@/pages/HomePage'
import Favorites from '@/pages/FavoritesPage'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="favorites" element={<Favorites />} />
    </>
  )
)
const App = () => <RouterProvider router={router} />

export default App
