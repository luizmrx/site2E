import './Mensagem.css'
import Botao from '../Botao'

const Mensagem = (props) => {
    return (
        <div className='container'>
            {props.imagem && (
                <img src={props.imagem} alt={props.textoAlternativo} className='caixa__imagem' />
            )}
            {props.tituloFora && (
                <h2 className='container__titulo'>{props.tituloFora}</h2>
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
                    <img src={props.parceiro} alt={props.parceiroTexto} className='caixa__parceiro' />
                )}
                {props.botao && (
                    <div className='caixa__container__botao'>
                        <Botao texto={props.botao} />
                    </div>
                )}
            </div>
        </div>

    ) 
}

export default Mensagem