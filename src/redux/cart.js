//1.provider => used to access state 
//2.store => store all state value
//3.reducer => state update
//4.action => action like button click

import { createSlice, } from '@reduxjs/toolkit';
import axios from 'axios'

const INITIAL_STATE = {
    cartList: [],
    cartCount: 0
};


const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,

    reducers: {
        addToCart: (state, action) => {
            //state.cartCount = 1,
            state.cartList.push({
                ...action.payload,
                count: 1
            })
            console.log({ res: action.payload })
        },
        incriment: (state, action) => {
            const productId = action.payload
            state.cartList.forEach(item => {
                if (item.id == productId) {
                    item.count++
                }
            })
        },
        decriment: (state, action) => {
            const productId = action.payload
            state.cartList.forEach(item => {
                if (item.id == productId) {
                    item.count--
                }
                if (item.count === 0) {
                    state.cartList.pop(item)
                }
            })
        }
    }
})

export const { addToCart, incriment, decriment } = cartSlice.actions
export default cartSlice.reducer;