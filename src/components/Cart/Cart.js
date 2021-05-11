import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary;
    }
    return (
        <div>
            <h4>This is Budget Cart</h4>
            <p>Players Added: {cart.length}</p>
            <h5>Total Budget: {total} M</h5>
        </div>
    );
};

export default Cart;