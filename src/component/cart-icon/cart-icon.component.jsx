import React from 'react'
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assests/004 shopping-bag.svg"
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


export default function CartIcon() {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}
