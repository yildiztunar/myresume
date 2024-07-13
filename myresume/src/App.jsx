import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Language from './components/Language'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <div className="App">
      <Header/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
    </div>
    </>
  )
}

export default App
