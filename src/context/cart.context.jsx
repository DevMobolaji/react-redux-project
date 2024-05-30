import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems container productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    //if found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItems) => cartItems.id === productToAdd.id ? 
        { ...cartItems, quantity: cartItems.quantity + 1} 
        : 
        cartItems)
    }

    //return new array with modified cartItems/ new cart items
    return[...cartItems, { ...productToAdd, quantity: 1}]

}



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [ cartItems, setCrtItems ] = useState([])
    const [ cartCount, setCartCount ] = useState(0);
    const [ cartTotal, setCartTotal ] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    },[cartItems])


    const addItemToCart = (productToAdd) => {
        setCrtItems(addCartItem(cartItems, productToAdd))
    }
        

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}