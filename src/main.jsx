import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Twitter } from './Twitter'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <HashRouter>
        <Twitter />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
