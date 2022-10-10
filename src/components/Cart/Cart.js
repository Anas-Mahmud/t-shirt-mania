import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item !!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Amar jnno ekta nao</h3>
            <p>Tomar nijer jnno ekta</p>
            <p><small>amar jnno arekta nao, Please</small></p>
        </div>
    }
    else {
        message = <p>Thanks for buying....</p>
    }

    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>Order Summary</h3>
            <h5 className={`blod ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>x</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>Tin jon ke gift diba..?</p> : <p>Kino kino...</p>}
            <p>And operator</p>
            {cart.length === 2 && <h2>Double items</h2>}
            <p>Or operator</p>
            {cart.length === 4 || <h3>Charta item na</h3>}
        </div>
    );
};

export default Cart;