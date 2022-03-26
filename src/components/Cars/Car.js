import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Car.css'
const Car = () => {

    const [cars, setCars] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart)

    const handleAddToCart = (car) => {
        const newCart = [car]
        setCart(newCart)
        // setCart(car)
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div className='container'>
            <div className='car-container'>
                {
                    cars.map(car =>
                        <Card key={car.id} data={car} handleAddToCart={handleAddToCart}><h1>(car)</h1></Card>)
                }
            </div>


            <div className="cart-container">
                {
                    cart.map(item => (<h1 key={item.id}>{item.name}</h1>))
                }

            </div>
        </div>
    );
};

export default Car;