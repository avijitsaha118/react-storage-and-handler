import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilites/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmeticsfake = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    // const cosmetics =
    //     [
    //         {
    //             "id": "6238c0480c07209f1be37c43",
    //             "price": 143,
    //             "name": "Betsy Cabrera"
    //         },
    //         {
    //             "id": "6238c0480795eddf8d34b487",
    //             "price": 181,
    //             "name": "Sharlene Wallace"
    //         },
    //         {
    //             "id": "6238c0480efd0a72706ca63a",
    //             "price": 281,
    //             "name": "Aimee Barrett"
    //         },
    //         {
    //             "id": "6238c048222b17f8b41edb60",
    //             "price": 483,
    //             "name": "Gardner Fernandez"
    //         },
    //         {
    //             "id": "6238c0483c442de800ae4908",
    //             "price": 68,
    //             "name": "Alexandra Clements"
    //         }
    //     ]

    // const cosmetics = [
    //     { id: 1, name: 'alta', price: 100 },
    //     { id: 2, name: 'ayna', price: 200 },
    //     { id: 3, name: 'palish', price: 300 },
    //     { id: 4, name: 'brash', price: 400 },
    //     { id: 5, name: 'chiruni', price: 500 }
    // ]

    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>welcome to fake data cosmetics store</h1>
            <p>Money needed to buy/ <br />
                Total sum of all product: ${total}</p>

            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmeticsfake;