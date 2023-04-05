import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
        message: "",
    },
    reducers: {
        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload
        },
        getProductError: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex(item => item._id === action.payload)
            ) 
        },
        deleteProductError: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        updateProductStart: (state) => {
            state.isFetching = false;
            state.error = false;
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products[
                state.products.findIndex(item => item._id === action.payload)
            ] = action.payload.product;
        },
        updateProductError: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        addProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload);    
        },
        addProductError: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
})

export const { 
    getProductStart, getProductSuccess, getProductError,
    deleteProductStart, deleteProductSuccess, deleteProductError,
    updateProductStart, updateProductSuccess, updateProductError,
    addProductStart, addProductSuccess, addProductError
} = productSlice.actions
export default productSlice.reducer
 