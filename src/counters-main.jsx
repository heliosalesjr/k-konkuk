import React from 'react'
import ReactDOM from 'react-dom/client'
import CountersApp from './lessons/counters/CountersApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountersApp />
  </React.StrictMode>,
)
