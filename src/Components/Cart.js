import React from 'react';

const Cart = ({cart, subtotal, tax})=>{
    const items = cart.map((item,i)=>{
        return <li key={i}>{item.name}: ${item.price.toFixed(2)}</li>
    })

        return (
          <section>
            <h2>Cart</h2>
            <ul className="Cart">
              {items}
            </ul>
            <h3>Subtotal: ${subtotal.toFixed(2)} </h3>
            <h3>Tax: ${tax.toFixed(2)} </h3>
            <h3>Total: ${(subtotal+tax).toFixed(2)} </h3>
          </section>
        );

}
export default Cart;