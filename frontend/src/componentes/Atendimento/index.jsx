import Mensagem from '../Mensagem'
import './Atendimento.css'

const Atendimento = () =>{
    return(
        <section className='atendimento'>
            <h2 className='atendimento__titulo'>
                Atendimento inteligente, humano e ágil
            </h2>
            <Mensagem paragrafo="A Lumi cuida do primeiro contato com clareza e objetividade. Mas você também pode contar com atendimento humano sempre que quiser — a combinação perfeita entre tecnologia eficiente e atenção personalizada." botao="Contato"/>
        </section>
    )
}

export default Atendimento