import React from 'react';
import './Card.css'
import { BsCart4 } from "react-icons/bs"
const Card = ({ data, handleAddToCart }) => {
    // console.log(data)

    const { name, picture, price, id } = data
    // console.log(data)



    return (
        <div >
            <div className="product-container">
                <img src={picture} alt="" />
                <h1>Name: {name}</h1>
                <h4>Price: ${price}</h4>


                <button onClick={() => handleAddToCart(data)}>
                    <BsCart4 />
                </button>
            </div>


        </div>
    );
};

export default Card;