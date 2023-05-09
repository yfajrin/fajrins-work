import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

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
            removeCartItem(cartItems, cartItemToDecrease)
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

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SWITCH_CART_TOGGLE, boolean)

export const addItemToCart = (cartItems, productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
    }

export const decreaseItemFromCart = (cartItems, cartItemToDecrease) => {
        const newCartItems = decreaseCartItem(cartItems, cartItemToDecrease)
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
    }

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
    }

