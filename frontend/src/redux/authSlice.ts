import { createSlice } from "@reduxjs/toolkit";

interface authState {
    token: string | null
}

const initialState : authState = {
    token: localStorage.getItem('token') || null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            console.log(action.payload)
            state.token = action.payload;
            localStorage.setItem('token', action.payload)
        },
        setLogOut: (state) => {
            state.token = null
            localStorage.removeItem('token')
        }
    }
})

export const { setToken, setLogOut } = authSlice.actions

export default authSlice.reducer