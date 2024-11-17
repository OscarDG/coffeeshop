import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/products-context";
import ShopingCart from "../assets/icons/shoping-cart.tsx";
import ItemCart from "../elements/itemCart";
import '../css/cart.css';

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

    return(
        <>
        <div className="buttonCartContainer" onClick={() => {setCartOpen(!cartOpen);}}>
            {!cartOpen && (
                    <div className="productsNumber">{productsLength}</div>
            )}
            <div className="buttonCart">
                {!cartOpen ? (
                    <ShopingCart color={"white"} size={20}/>
                ) : (
                    <ShopingCart color={"#cd853f"} size={20}/>
                )}
            </div>
        </div>
        <div className="cartContainer">
            {cartItems && cartOpen && (
                <div className="openCart-container">
                    <h2 className="openCart-container--title">Tu carrito</h2>
                    {cartItems.length === 0 ? <p>Tu carrito está vacio</p> : (
                        <div className="openCart-items">
                        {cartItems.map((item, i) => (
                            <ItemCart key={i} item={item} />
                        ))}</div>
                    )}

                    <h2 className="openCart-container--total">Total: ${total}</h2>
                </div>
            )}
        </div>
        </>
    )
}

export default Cart;