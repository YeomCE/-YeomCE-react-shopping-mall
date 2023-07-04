import { createSlice } from "@reduxjs/toolkit"

let cart = createSlice({
    name: 'cart',
    initialState: [
    ],
    reducers: {
        addCount(state, action) {
            let addCountIndex = state.findIndex((item)=>{
                return item.id == action.payload
            })
            state[addCountIndex].count++
        },
        minusCount(state, action) {
            let minusCountIndex = state.findIndex((item)=>{
                return item.id == action.payload
            })
            state[minusCountIndex].count--
        },
        deleteItem(state,action){
            let deleteItemIndex = state.findIndex((item)=>{
                return item.id === action.payload
            })
            state.splice(deleteItemIndex,1)
        },
        addToCart(state, action){
            if(state.some((item)=>{
                return item.id == action.payload[0].id
            })){
                let countPlus = state.filter((item)=>{
                    return item.id === action.payload[0].id
                })
                countPlus[0].count++
            }
            else {
                state.push(action.payload[0])
                let addedItem = state.filter((item)=>{
                    return item.id === action.payload[0].id
                })
                addedItem[0].count = 1
            }

        }
    }
})

export let { addCount, minusCount, addToCart, deleteItem } = cart.actions

export default cart