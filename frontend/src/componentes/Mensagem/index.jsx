import './Mensagem.css'

const Mensagem = (props) =>{
    return(
        <div className='container'>
            {props.imagem && (
                    <img src={props.imagem} alt={props.textoAlternativo} className='caixa__imagem'/>
                )}
            <div className='caixa'>
                {props.titulo && (
                    <p className='caixa__titulo'>
                        {props.titulo}
                    </p>
                )}
                {props.paragrafo && (
                    <p className='caixa__paragrafo'>{props.paragrafo}</p>
                )}
                {props.descricao && (
                    <p className='caixa__descricao'>
                        {props.descricao}
                    </p>
                )}
                {props.parceiro && (
                    <img src={props.parceiro} alt={props.parceiroTexto} className='caixa__parceiro'/>
                )}
            </div>
        </div>
        
    )
}

export default Mensagem