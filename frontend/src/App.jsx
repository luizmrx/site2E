import { useState } from 'react'
import './Reset.css'
import Header from './componentes/Header'
import Banner from './componentes/Banner'
import Etapas from './componentes/Etapas'
import Newsletter from './componentes/Newsletter'
import Parceiros from './componentes/Parceiros'
import Conversar from './componentes/Conversar'
import Footer from './componentes/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Etapas/>
      <Newsletter/>
      <Parceiros/>
      <Conversar/>
      <Footer/>
    </>
  )
}

export default App
