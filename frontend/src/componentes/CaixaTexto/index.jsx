import './CaixaTexto.css'

const CaixaTexto = (props) =>{
    return(
        <input type="text" placeholder={props.placeholder} className='caixa__texto' id={props.placeholder} required={props.obrigatorio}/>
    )
}

export default CaixaTexto