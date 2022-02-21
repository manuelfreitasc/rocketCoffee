import { useState } from 'react'
import './App.css'
import { Background } from './Components/Background'
import { Home } from './pages/Home'
function App() {
  return (
    <div className="conteiner">
      <Background />
      <Home />
    </div>
  )

}

export default App
