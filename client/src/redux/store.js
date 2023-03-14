import { configureStore } from "@reduxjs/toolkit"
import useReducer from "./userRedux"
import cartReducer from "./cartRedux"

const store = configureStore({
    reducer:{
        cart: cartReducer,
        user: useReducer

    }
})

export default store