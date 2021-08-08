import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button';
import './Navbar.css';

function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    //evento para mostrar ou esconder o botão de Sign Up
    window.addEventListener('resize',showButton)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-conteiner'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className='fab fa-typo3'/>  {/* <i> é a tag de icone do fontawesome */}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {/* fas da-times e fa-bars são icones (<i>) da biblioteca fontawesome (npm install @fortawesome/fontawesome-free) */}
                        <i className={click? "fas fa-times":"fas fa-bars"} />
                    </div>
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/singnup' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {/* a linha abaixo funciona como se fosse um if() */}
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar

