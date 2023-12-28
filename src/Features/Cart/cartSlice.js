import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // return newItem as Object
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // return pizzaId
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload,
            );
        },
        increaseItemQuantity(state, action) {
            const itemForIncrease = state.cart.find(
                (item) => item.pizzaId === action.payload,
            );
            itemForIncrease.quantity++;
            state.totalPrice = state.quantity * state.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            const itemForDecrease = state.cart.find(
                (item) => item.pizzaId === action.payload,
            );
            itemForDecrease.quantity--;
            state.totalPrice = state.quantity * state.unitPrice;

            if (itemForDecrease.quantity === 0) {
                cartSlice.caseReducers.deleteItem(state, action);
            }
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    clearCart,
    decreaseItemQuantity,
    deleteItem,
    increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentItemQuantity = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
