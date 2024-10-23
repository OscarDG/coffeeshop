import React from 'react'
import Slider from "react-slick";
import '../css/products.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {products} from './products_data'

function Products(){

    //slider setting
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slide: 'div',
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
        return(
            <>
            <div className="products-section">
                <div className='products-title'>
                    <h2>Nuestros productos</h2>
                </div>
                <div className='products-container'>
                        <div className='cards-container'>
                        <Slider {...settings}>
                            {products.map((product, index) => (
                                <>
                                <div key= {product.id} className='product-card'>
                                        <img class= 'product-image' src={product.image} alt='producto' />
                                        <h3 className='product-name'>{product.name}</h3>
                                        <p className='product-weight'>{product.weight}</p>
                                        <a className='green-cta' href= '/store'>COMPRAR</a>
                                </div>
                                </>
                            ))}
                        </Slider>
                        </div>
                </div>
                <div className='products-banner'>
                  <p className='products-banner-text'>Conoce las historias de nuestros campesinos</p>
                  <a className='green-cta' href='/partners'>DESCUBRE</a>
                </div>
            </div>
            </>
        );
    };


export default Products;