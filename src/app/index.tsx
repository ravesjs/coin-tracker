import '@/app/styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { attachLogger } from 'effector-logger'
import { appStarted } from '@/shared/config/init'

attachLogger()

const container = document.querySelector('#root') as HTMLElement
const root = ReactDOM.createRoot(container)

appStarted()
root.render(<React.StrictMode><App /></React.StrictMode>)
// Remove "React.StrictMode" at prod and just leave "App" inside render
