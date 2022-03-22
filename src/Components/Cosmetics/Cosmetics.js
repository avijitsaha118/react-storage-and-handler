import React from 'react';
import { add } from '../../utilites/calculate';
// import add from '../../utilites/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);
    return (
        <div>
            <h2>Welocme to my strore</h2>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;