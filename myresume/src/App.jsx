import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  

  return (
    <>
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/login">
      <Login/>
      </Route>
    </Switch>
    </>
  )
}

export default App
