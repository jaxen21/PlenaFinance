import { createContext, useEffect, useState } from 'react';

const addCartiItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => (item.id === productToAdd.id))

    if (existingCartItem) {
        return cartItems.map((cartItem) => (
            (cartItem.id === productToAdd.id) ? ({ ...cartItem, quantity: cartItem.quantity + 1 }) : cartItem)
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((item) => (item.id === cartItemToRemove.id))

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => (
        (cartItem.id === cartItemToRemove.id) ? ({ ...cartItem, quantity: cartItem.quantity - 1 }) : cartItem)
    )
}

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartiItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id))
    }

    const value = { addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}