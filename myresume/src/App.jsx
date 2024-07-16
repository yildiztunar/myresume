import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Resume from './pages/Resume'
import { Redirect } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'


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

      <ProtectedRoute path="/resume">
        <Resume/>
      </ProtectedRoute>

    </Switch>
    </>
  )
}

export default App
