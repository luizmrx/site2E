import './Header.css'
import Botao from '../Botao'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className='cabecalho'>
                <Link className='' to={"/"}>
                    <img src="src/assets/logo__branco.svg" alt="Logo da 2E" />
                </Link>
                <div className='cabecalho__opcoes'>
                    <Botao texto="Contato"/>
                    <input type="checkbox" id='menu' className='check'/>
                    <label htmlFor="menu" className='menu__hamburguer'>
                        <img src="src/assets/menu__hamburguer.svg" alt="Menu hamburguer" />
                    </label>
                    <ul className='cabecalho__links'>
                        <li className='cabecalho__item'>
                            <Link className='cabecalho__link' to={"/sobre"}>Sobre</Link>
                        </li>
                        <li className='cabecalho__item'>
                            <Link className='cabecalho__link' to={"/seguranca"}>Segurança</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header