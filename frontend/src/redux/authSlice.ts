import { createSlice } from "@reduxjs/toolkit";

interface authState {
    token: string | null,
    id: number | null
}

const initialState : authState = {
    token: localStorage.getItem('token') || null,
    id: Number(localStorage.getItem('id')) || null
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
        },
        setUser: (state, action) => {
            state.id = action.payload,
            localStorage.setItem('id',action.payload)
        }
    }
})

export const { setToken, setLogOut, setUser } = authSlice.actions

export default authSlice.reducer