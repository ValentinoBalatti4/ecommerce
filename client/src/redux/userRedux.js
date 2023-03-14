import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        message: ""
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginError: (state, action) => {
            state.isFetching = false
            state.error = true
            state.message = action.payload
        }
    }
})

export const { loginStart, loginSuccess, loginError } = userSlice.actions
export default userSlice.reducer
