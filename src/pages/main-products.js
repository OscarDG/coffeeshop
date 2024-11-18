import React from "react";
import { CartProvider } from "../contexts/products-context";
import Store from "../elements/store";
import Cart from "../elements/store-cart";
import {Footer} from "../elements/footer";
import '../css/store.css';
import '../css/footer.css';

function Mainproducts(){
    return(
        <CartProvider>
        <header>
            <Cart />
        </header>
        <main>
            <section className="mainProducts-container">
                <div className="store-container">
                    <Store />
                </div>
            </section>
            <footer className='home-footer--wrap'>
                <Footer />
            </footer>
        </main>
        </CartProvider>
    );
}

export default Mainproducts;