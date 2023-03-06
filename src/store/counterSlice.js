import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        setCounter: (state, action) => {
            state.value = action.payload
        },
        resetCounter: state => {state.value = 0}
    }
})

export default counterSlice.reducer
export const { setCounter, resetCounter} = counterSlice.actions