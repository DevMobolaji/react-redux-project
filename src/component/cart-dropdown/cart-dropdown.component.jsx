import React, { useContext } from 'react'
import "./cart-dropdown.styles.scss"


import Button from '../button/button'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../context/cart.context'
import { useNavigate } from 'react-router-dom'


export default function CartDropdown() {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
      navigate("/checkout")
    }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
         {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}
