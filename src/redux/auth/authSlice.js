import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { name: null, emil:null},
    token:null,
    isLoggedIn: false,

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (bulider) => {}
})

export const authReducer = authSlice.reducer