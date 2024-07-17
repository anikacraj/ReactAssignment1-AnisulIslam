import React from 'react';
import './card.css';

// Card component that accepts props to display product details
function Card({ title, price, rating, description, image }) {
    return (
        <div className="card">
            {/* Image of the product */}
            <img src={image} alt={title}  id='image' />
            {/* Title of the product */}
            <div className='description'>
            <div className="cards" id="card-title">{title}</div>
            {/* Price of the product */}
            <br />
            <div className="cards" id="card-price">Price :{price}</div>
            {/* Rating of the product */}
        
            <div className="cards" id="card-rating">Ratting:{rating}</div>
            {/* Description of the product */}
            <br />
            <div className="cards" id="card-description">{description}
                <br />
          
            </div>
            {/* Button to add the product to the cart */}
            <button >Add to Cart</button>
            </div>
        </div>
    );
}

export default Card;