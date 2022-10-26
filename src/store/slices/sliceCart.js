

import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const sliceCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state, action)=>{
        const newItem = action.payload
        const existingItem = state.cartItems.find(
            item => item.id === newItem);
        
        state.totalQuantity++

        if(!existingItem){
            state.cartItems.push({
                id: newItem.id,
                title: newItem.title,
                price: newItem.price,
                image: newItem.image,
                quantity: 1,
                totalPrice: newItem.price
            })
        }

        else{
            existingItem.quantity++
            existingItem.totalPrice = Number(existingItem.totalPrice) + Number
            (newItem.price)
        }

        state.totalAmount = state.cartItems.reduce((total, item)=> total+ Number(item.price) + Number(item.quantity))

        console.log(state.totalQuantity);
        console.log(state.cartItems);
        console.log(newItem);
    }
  }
});

export const cartActions = sliceCart.actions

export default sliceCart.reducer