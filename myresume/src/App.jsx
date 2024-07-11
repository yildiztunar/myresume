import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Language from './components/Language'
import Theme from './components/Theme'

function App() {
  

  return (
    <>
    <div className="App">
     <Theme />
      <Language/>
    </div>
    </>
  )
}

export default App
