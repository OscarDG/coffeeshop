import React, {useContext} from "react";
import { products } from "../data/products_data";
import { CartContext } from "../contexts/products-context";
import '../css/store.css';

const Store = () => {
    const {addItemToCart} = useContext(CartContext);

    return(
        <div className="products-wrapp">
            {products.map((producto) => (
                <div key={producto.id} className="productCard">
                    <img src={producto.image} alt={producto.name}/>
                    <div className="cards-data">
                        <p className="productCard-name">{producto.name}</p>
                        <p className="productCard-price">${producto.price.toLocaleString('es-ES')}</p>
                    </div>
                    <button className="product-card--button" onClick={() => addItemToCart(producto)}>Agregar</button>
                </div>
            ))}
        </div>
    )
}

export default Store;