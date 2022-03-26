import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Car.css'
const Car = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div className='container'>
            <div className='car-container'>
                {
                    cars.map(car => <Card key={car.id} data={car}><h1>(car)</h1></Card>)
                }
            </div>


            <div className="cart-container">
                <h1>This is cart </h1>
            </div>
        </div>
    );
};

export default Car;