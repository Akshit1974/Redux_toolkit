import { createSlice } from "@reduxjs/toolkit";

export const  counterValue = createSlice({
    name:"counter",
    initialState:{value:0},
    reducers:{
        increment : (state)=>{
            state.value += 1;
        },
        decrement : (state)=>{
            state.value -= 1;
        },
        addAmount:(state,action)=>{
            state.value += action.payload;
        },
        decreaseAmount:(state,action)=>{
            state.value -= action.payload;
        }
    },
});

export const {increment,decrement,addAmount,decreaseAmount}=counterValue.actions;
export const selectCount =(state)=>state.counter.value;

export default counterValue.reducer;