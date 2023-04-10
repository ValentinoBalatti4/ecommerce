import { createSlice } from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                product => product._id !== action.payload._id
            )
        }
    }
})

export const { addProduct, removeProduct } = wishlistSlice.actions
export default wishlistSlice.reducer
