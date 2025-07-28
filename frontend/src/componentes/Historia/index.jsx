import './Historia.css'
import Mensagem from '../Mensagem'

const Historia = () =>{
    return(
        <main className='historia'>
            <Mensagem titulo="Sobre a 2E" paragrafo="Economia real na sua conta de luz, com tecnologia, inteligência e atendimento direto no WhatsApp."/>
            <p className='historia__paragrafo'>Na 2E, acreditamos que economizar na conta de luz deveria ser simples, acessível e vantajoso para todos. Por isso, desenvolvemos uma solução que conecta você às revendedoras de energia mais vantajosas do mercado, sempre com foco na melhor economia possível, de forma prática e 100% gratuita.</p>
            <p className='historia__paragrafo'>
                Com a ajuda da Lumi, nossa inteligência artificial exclusiva, iniciamos um atendimento direto pelo WhatsApp. Ela explica tudo de forma simples e coleta os documentos necessários para seu cadastro, com total segurança e privacidade.
            </p>
            <p className='historia__paragrafo'>Nosso compromisso é garantir um desconto maior do que contratar direto com a revendedora, mantemos nosso banco de dados constantemente atualizado, comparando ofertas e condições para indicar a revendedora ideal para o seu perfil.</p>
        </main>
    )
}

export default Historia