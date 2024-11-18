import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/products-context";
import ShopingCart from "../assets/icons/shoping-cart.tsx";
import CloseWhite from "../assets/icons/close.tsx";
import ItemCart from "../elements/itemCart";
import logo from '../assets/images/coffee-cups.png';
import Dropmenu from '../elements/dropmenu';
import '../css/cart.css';
import '../css/navbar.css';

const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);

    const { cartItems } = useContext(CartContext);

    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [cartItems]);

    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);

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

    return(
        <>
        <div className="navbar">
            <div className= {navClass} onClick={handleEvent}>
                <span className='line-1'></span>
                <span className='line-2'></span>
                <span className='line-3'></span>
            </div>
            <div className="header-logo">
                <a href='/home'><img src= {logo} className="logo" alt="header_logo"/></a>
            </div>
            <div className='nav-menu'>
                <ul className='nav-menu--list'>
                    {navLinks}
                </ul>
            </div>
            <div>
                {isOpen && <Dropmenu />}
            </div>
        </div>

        <div className="buttonCartContainer" onClick={() => {setCartOpen(!cartOpen);}}>
            {!cartOpen && (
                    <div className="productsNumber">{productsLength}</div>
            )}
            <div className="buttonCart">
                {!cartOpen ? (
                    <ShopingCart color={"white"} size={20}/>
                ) : (
                    <CloseWhite color={"white"} size={20}/>
                )}
            </div>
        </div>
        <div className="cartContainer">
            {cartItems && cartOpen && (
                <div className="openCart-container">
                    <h2 className="openCart-container--title">Tus compras</h2>
                    {cartItems.length === 0 ? <p>Tu carrito está vacio</p> : (
                        <div className="openCart-items">
                        {cartItems.map((item, i) => (
                            <ItemCart key={i} item={item} />
                        ))}</div>
                    )}

                    <h2 className="openCart-container--total">Total: ${total.toLocaleString('es-ES')}</h2>
                    <div className="payButton-container">
                        {cartItems.length === 0 ? <div></div> : (
                            <button className="payButton">PAGAR</button>
                        )}
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default Cart;