import React from 'react';
import Data from '../../data/data.json';

const Cart = (props) => {
    const cart = props.cart;
    const playerName = cart.map(pName => pName.name)
    const playerSalary = cart.map(pSalary => pSalary.salary);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary;
    }
    return (
        <div>
            <h4>This is Budget Cart</h4>
            <p>Players Added: {cart.length}</p>
            <ul>
                {
                    cart.map(p => <p>{playerName} - {playerSalary}</p>)
                }
            </ul>
            <h5>Total Budget: {total} M</h5>
        </div>
    );
};

export default Cart;