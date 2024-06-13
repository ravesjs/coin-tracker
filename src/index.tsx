import '@/styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { attachLogger } from 'effector-logger'
import App from './App'

attachLogger()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// Remove "React.StrictMode" at prod and just leave "App" inside render
