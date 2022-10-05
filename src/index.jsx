import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'

// local
import './tailwind.css'
import App from './App'

const rootNode = document.getElementById('root')

ReactDOM.createRoot(rootNode).render(
  <BrowserRouter basename="/frontPortfolioProject">
    <App />
  </BrowserRouter>
)

reportWebVitals()
