import React, { useState } from 'react';
import './Card.css'
import { BsCart4 } from "react-icons/bs"
import RandomNumber from '../RandomNumber/RandomNumber';
const Card = ({ data, handleAddToCart }) => {
    // console.log(data)

    const { name, picture, price, id } = data
    // console.log(data)

    const [random, setRandom] = useState([Math.floor(Math.random() * 6) + 1])
    console.log(random)

    const handleRandomNumber = (car) => {
        const newRandom = [car]
        setRandom(newRandom)
    }

    return (
        <div >
            <div className="product-container">
                <img src={picture} alt="" />
                <h1>Name: {name}</h1>
                <h4>Price: ${price}</h4>


                <button onClick={() => handleAddToCart(data)}>Add to Cart
                    <BsCart4 />
                </button>
            </div>

            <div>
                {
                    random.map(num => <RandomNumber data={num} handleRandomNumber={handleRandomNumber} ><h1>(num)</h1></RandomNumber>)
                }
            </div>


        </div>
    );
};

export default Card;