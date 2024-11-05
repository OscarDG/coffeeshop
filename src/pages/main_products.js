import React from 'react';
import { products } from '../data/products_data';
import '../css/main_products.css'
import Navbar from '../elements/navbar';
import { Footer } from '../elements/footer';

function Mainproducts(){
    return (
        <>
        <header className="App-header">
         <Navbar />
        </header>
        <section className="products-store">
            {products.map((product, id) =>
                <>
                <div className='products-wrap'>
                    <div key={id} className="store-card">
                        <img src={product.image} alt={product.name}/>
                        <p>
                        {product.name} - ${product.price}
                        </p>
                    </div>
                    <button className="add-button" onClick={() => console.log(product)}>Agregar al carrito</button>
                </div>
                </>
            )}
        </section>
        <footer className='home-footer--wrap'>
            <Footer />
        </footer>
        </>
    );
}

export default Mainproducts;