import { useState } from 'react'
import './App.css'
import { Background } from './Components/Background'
import { Header } from './Components/Header'
function App() {
  return (
    <div className="conteiner">
      <Background />
      <Header />
    </div>
  )

}

export default App
