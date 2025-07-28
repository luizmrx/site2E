import Mensagem from '../Mensagem'
import './Etapas.css'

const Etapas = (props) =>{
    console.log(props.itens)
    return(
        <section className='etapas'>
            <h2 className='etapas__titulo'>
                {props.titulo}
            </h2>
            {props.itens.map( (item, index) =>{
                return <Mensagem key={item.titulo} titulo={item.titulo} paragrafo={item.paragrafo} imagem={item.imagem} textoAlternativo={item.textoAlternativo}/>
            })}
        </section>
    )  
}
 
export default Etapas