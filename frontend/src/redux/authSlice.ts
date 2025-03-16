import { createSlice } from "@reduxjs/toolkit";

interface authProp {
    token : string,
}


const initialState = {
    token: localStorage.getItem('token')? JSON.stringify(localStorage.getItem('token')) : null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload)
        }
    }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer