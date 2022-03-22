import React from 'react';
import { addToDataBase, removeFromDataBase } from '../../utilites/fakedb';
// import('./Cosmetic.css')
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        // console.log('item added', id);
        addToDataBase(id);
    }
    const removeFromCart = id => {
        removeFromDataBase(id);
    }

    // const addToCartWithParameter = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy this:{name}</h2>
            <p>Only for: ${price}</p>
            <p>cosmetic id:{id}</p>
            {/* <button onClick={addToCartWithParameter}>Add to Cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;