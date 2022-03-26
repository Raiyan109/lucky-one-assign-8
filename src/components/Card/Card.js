import React from 'react';
import './Card.css'
import { BsCart4 } from "react-icons/bs"
const Card = ({ data }) => {
    // console.log(data)

    const { name, picture, price, id } = data
    // console.log(data)

    const handleAddToCart = (id) => {
        console.log(id)
    }

    return (
        <div >
            <div className="product-container">
                <img src={picture} alt="" />
                <h1>Name: {name}</h1>
                <h4>Price: ${price}</h4>
                <p>Id : {id}</p>

                <button onClick={() => handleAddToCart(id)}>
                    <BsCart4 />
                </button>
            </div>


        </div>
    );
};

export default Card;