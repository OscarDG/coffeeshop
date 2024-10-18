import {useState} from 'react'
import logo from '../assets/images/coffee-cups.png'
import menu_icon from '../assets/icons/mobile_menu.svg'
import shoping_cart from '../assets/icons/shoping-cart.svg'
import Dropmenu from '../elements/dropmenu'
import '../css/navbar.css'

function Navbar(){
    const [navClass, setNavClass] = useState('menu-icon--mobile');
    const [isOpen, setIsOpen] = useState(false);

    const handleEvent = () => {

     setIsOpen(prevIsOpen => !prevIsOpen)

        if(navClass === 'menu-icon--mobile'){
            setNavClass(() => 'menu-icon--mobile open')
        }else{
            setNavClass(() => 'menu-icon--mobile')
        };
    };

    const links = [
        {id:'Sobre nosotros', name: 'about'},
        {id:'Nuestro café', name: 'products'}, 
        {id:'Nuestr@s aliad@s', name: 'partners'}
       ];

    const navLinks = links.map(link => {
        return(
            <li key={link.id}><a href={link.name}>{link.id}</a></li>
        )
    });

    return (
        <div className="navbar">
            <div className= {navClass} onClick={handleEvent}>
                <span className='line-1'></span>
                <span className='line-2'></span>
                <span className='line-3'></span>
            </div>
            <div className="header-logo">
                <a href='/home'><img src= {logo} className="logo"/></a>
            </div>
            <div className='nav-menu'>
                <ul className='nav-menu--list'>
                    {navLinks}
                </ul>
            </div>
            <a href='#'>
                <div className='shoping-cart--wrap'>
                        <img src= {shoping_cart}/>
                        <span>1</span>
                </div>
            </a>
            <div>
                {isOpen && <Dropmenu />}
            </div>
        </div>
    );
};


export default Navbar;