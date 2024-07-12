import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Language from './components/Language'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'

function App() {
  

  return (
    <>
    <div className="App">
      <Header/>
      <Skills/>
      <Profile/>
    </div>
    </>
  )
}

export default App
