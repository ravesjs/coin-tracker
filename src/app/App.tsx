import React from 'react'
import HomePage from '@/pages/main'
import FavoritesPage from '@/pages/favorites'
import { RouterProvider, createRoutesView } from 'atomic-router-react'
import Layout from '@/widgets/layout'
import { router, routes } from '@/shared/config/routing'


const RoutesView = createRoutesView({
  routes: [
    {route: routes.home, view: HomePage, layout: Layout},
    {route: routes.favorites, view: FavoritesPage, layout: Layout},
  ],
  otherwise() {
    return <div>Page not found!</div>;
  },
})

const App = () => (
  <RouterProvider router={router}>
    <RoutesView />
  </RouterProvider>
)

export default App
