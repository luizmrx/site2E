import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className='cabecalho'>
                <a href="#">
                    <img src="src/assets/logo__branco.svg" alt="Logo da 2E" />
                </a>
                <div className='cabecalho__opcoes'>
                    <a href="#" className='contato'>Contato</a>
                    <input type="checkbox" id='menu' className='check'/>
                    <label htmlFor="menu" className='menu__hamburguer'>
                        <img src="src/assets/menu__hamburguer.svg" alt="Menu hamburguer" />
                    </label>
                    <ul className='cabecalho__links'>
                        <li className='cabecalho__item'>
                            <a href="#" className='cabecalho__link'>
                                Sobre
                            </a>
                        </li>
                        <li className='cabecalho__item'>
                            <a href="#" className='cabecalho__link'>
                                Segurança
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header