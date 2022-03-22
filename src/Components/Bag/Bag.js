import React from 'react';
import { divide } from '../../utilites/calculate';

const Bag = () => {
    const first = 550;
    const second = 10;
    const total = divide(first, second);
    return (
        <div>
            <h3>My bag price:{total} </h3>
        </div>
    );
};

export default Bag;