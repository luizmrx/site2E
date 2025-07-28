import { useState } from 'react'
import Header from './componentes/Header'
import './Reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Seguranca from './pages/Seguranca'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/seguranca' element={<Seguranca />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
