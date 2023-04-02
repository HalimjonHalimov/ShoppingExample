import { createSlice } from "@reduxjs/toolkit";
import { setItem } from './../helpers/persistance-local'

const initialState = {
    isLoading: false,
    loggidIn: false,
    error: null,
    user: null
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUserStart: (state, action) => {
            state.isLoading = true
        },
        signUserSuccess: (state, action) => {
            state.loggidIn = true
            state.isLoading = false
            state.user = action.payload
            setItem('token', action.payload.token)
        },
        signUserFailure: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        signUserOut: (state, action) => {
            state.user = null
            state.loggidIn = false
        }
    }
})

export const { signUserStart, signUserSuccess, signUserFailure, signUserOut  } = authSlice.actions;
export default authSlice.reducer;