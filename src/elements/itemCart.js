import React, { useContext } from "react";
import { CartContext } from "../contexts/products-context";
import "../css/itemCart-open.css"

const ItemCart = ({ item }) => {

    const {deleteItemToCart, addItemToCart} = useContext(CartContext);
    const {id} = item;

    return(
        <div className="openCart">
            <img className="openCart-image" src={item.image} alt={item.name}/>
            <div>
                <div>
                    <p className="openCart-name">{item.name}</p>
                    <div className="openCart-prices">
                        <span>{item.amount}</span>
                        <p>Total: ${item.amount * item.price}</p>
                    </div>
                    <div>
                        <button className="openCart-buttons" onClick={()=>addItemToCart(item)}>AGREGAR</button>
                        <button className="openCart-buttons" onClick={()=>deleteItemToCart(item)}>QUITAR</button>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default ItemCart