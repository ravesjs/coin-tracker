import React from 'react'
import Home from '@/pages/HomePage'
import Favorites from '@/pages/FavoritesPage'
import Header from './components/Header/Header'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
  )
)
