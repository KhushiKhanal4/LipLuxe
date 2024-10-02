import { createSlice } from "@reduxjs/toolkit";

const initialState =[];

//slice takes objects
const CartSlice=createSlice({
    name : 'cart',
    initialState,
    reducers : {
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item.id !== action.payload)
        }

    }
})

export const {add,remove} =CartSlice.actions;
export default CartSlice.reducer;