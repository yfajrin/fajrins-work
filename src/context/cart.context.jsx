import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        );
    }

    return (
        [...cartItems, {...productToAdd, quantity: 1}]
    )
}

const decreaseCartItem = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToDecrease.id
    );

    if(existingCartItem.quantity === 1) {
        return (
            cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id)
        )
    }
    
    return cartItems.map((cartItem) => cartItem.id === cartItemToDecrease.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
        );

}

const removeCartItem = (cartItems, cartItemToRemove) => {
    return(cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id))
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart : () => {},
    decreaseItemFromCart : () => {},
    removeItemFromCart : () => {},
    cartTotal: 0,
    cartCount: 0
})


export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
    const [ cartTotal, setCartTotal ] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => 
            total + cartItem.quantity
        , 0) 
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => 
            total + (cartItem.price*cartItem.quantity)
        , 0)
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const decreaseItemFromCart = (cartItemToDecrease) => {
        setCartItems(decreaseCartItem(cartItems, cartItemToDecrease))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, decreaseItemFromCart, removeItemFromCart, cartTotal}
    return(
        <CartContext.Provider value = {value}>{children}</CartContext.Provider>
    )
}