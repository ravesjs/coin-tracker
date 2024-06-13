import React from 'react'
import Home from '@/pages/HomePage'
import Favorites from '@/pages/FavoritesPage'
import { createHistoryRouter, createRoute } from 'atomic-router'
import { createBrowserHistory } from 'history'
import { Route, RouterProvider } from 'atomic-router-react'

export const homeRoute = createRoute()
export const favoritesRoute = createRoute()
const routes = [
  { path: '/', route: homeRoute },
  { path: '/favorites', route: favoritesRoute },
]
const router = createHistoryRouter({ routes })
const history = createBrowserHistory()
router.setHistory(history)

const App = () => (
  <RouterProvider router={router}>
    <Route route={homeRoute} view={Home} />
    <Route route={favoritesRoute} view={Favorites} />
  </RouterProvider>
)

export default App
