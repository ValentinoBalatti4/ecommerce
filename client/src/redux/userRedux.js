import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        message: "",
    },
    reducers: {
        loading: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
            state.error = false
        },
        loginError: (state, action) => {
            state.isFetching = false
            state.error = true
            state.message = action.payload
        },
        logoutSuccess: (state) => {
            state.currentUser = null
            state.isFetching = false
        },
        logoutError: (state, action) => {
            state.isFetching = false
            state.error = true
            state.message = action.payload
        }
    }
})

export const { loading, loginSuccess, loginError, logoutSuccess, logoutError } = userSlice.actions
export default userSlice.reducer
