import React from "react";
import { CartProvider } from "../contexts/products-context";
import Store from "../elements/store";
import '../css/store.css';
import Cart from "../elements/store-cart";
import ItemCart from "../elements/itemCart";

function Mainproducts(){
    return(
        <div className="mainProducts-container">
            <CartProvider>
                <Store />
                <Cart />
            </CartProvider>
        </div>
    );
}

export default Mainproducts;