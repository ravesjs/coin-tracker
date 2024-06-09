import '@/styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from '@/router'
import { RouterProvider } from 'react-router-dom'
import { attachLogger } from 'effector-logger'

attachLogger()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
// Remove "React.StrictMode" at prod and just leave "App" inside render
