import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

const initialState = {
    items: []
}

export const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    // Actions
    const addToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item,
        })
    }
    const incrementItem = (id) => {
        dispatch({
            type: 'INCREMENT_ITEM',
            payload: id,
        })
    }
    const decrementItem = (id) => {
        dispatch({
            type: 'DECREMENT_ITEM',
            payload: id,
        })
    }
    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id,
        })
    }
    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
        })
    }

    return(
        <CartContext.Provider value={{
            items: state.items,
            addToCart, incrementItem,
            decrementItem, removeItem,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}