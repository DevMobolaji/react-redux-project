import React, { useContext }from 'react'
import { CartContext } from '../../context/cart.context'


export default function Checkout() {
    const { cartItems, addItemToCart } = useContext(CartContext)

    const totalItemPrice = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0) 
  return (
    <div>
        {cartItems.map(({id, name, price, quantity, imageUrl}) => (
            <div key={id}>
                <h2>{name}</h2>
                <img src={imageUrl} alt={`${name}`}/>
                <span>{price}</span>
                <span>{quantity}</span>
                <span>decrement</span>  
                <span onClick={addItemToCart(cartItems)}>increment</span>  
            </div>
        ))}
        <h2>{totalItemPrice}</h2>
    </div>
  )
}
