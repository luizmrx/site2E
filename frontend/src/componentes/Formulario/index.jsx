import './Formulario.css'
import CaixaTexto from '../CaixaTexto'

const Formulario = () => {

    const aoSalvar = (event) =>{
        event.preventDefault()
        console.log("Formulario foi submetido")
    }

    return (
        <form onSubmit={aoSalvar} className='formulario'>
            <CaixaTexto placeholder="Nome" />
            <CaixaTexto placeholder="E-mail" obrigatorio={true}/>
            <button className='formulario__botao'>Quero Economizar!</button>
        </form>
    )
}

export default Formulario