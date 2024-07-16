import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n.js'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>

  <Provider store={store}>
    <App />
  </Provider>

  </Router>
)
