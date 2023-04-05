import { loading, loginSuccess, loginError, logoutSuccess, logoutError } from "./userRedux"
import { 
    getProductStart, getProductSuccess, getProductError,
    deleteProductStart, deleteProductSuccess, deleteProductError,
    updateProductStart, updateProductSuccess, updateProductError,
    addProductStart, addProductSuccess, addProductError
} from "./productRedux"
import { api } from "../requests"

export const login = async (dispatch, user) => {
    dispatch(loading())
    try{
        const res = await api.post('/auth/login', user)
        if(res.data.status !== "error"){
            dispatch(loginSuccess(res.data))
        } else{
            dispatch(loginError(res.data))
            console.log(loginError(res.data))
        } 
    } catch(e){
        dispatch(loginError())
    }
}


export const logout = async (dispatch) => {
    dispatch(loading())
    try{
        const res = await api.post('/auth/logout')
        if(res.data.status !== "error"){
            dispatch(logoutSuccess(res.data))
        } else{
            dispatch(logoutError())
            console.log()
        }
    } catch(e){
        dispatch(logoutError())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())
    try{
        const res = await api.get('/products')
        if(res.data.status !== "error"){
            dispatch(getProductSuccess(res.data))
        } else{
            dispatch(getProductError(res.data))
            console.log(getProductError(res.data))
        } 
    } catch(e){
        dispatch(getProductError())
    }
}

export const addProduct = async (dispatch, id) => {
    dispatch(addProductStart())
    try{
        const res = await api.post(`/products`)
        if(res.data.status !== "error"){
            dispatch(addProductSuccess(res.data))
        } else{
            dispatch(addProductError(res.data))
            console.log(addProductError(res.data))
        } 
    } catch(e){
        dispatch(updateProductError())
    }
}

export const updateProduct = async (dispatch, id, product) => {
    dispatch(updateProductStart())
    try{
        const res = await api.put(`/products/${id}`)
        if(res.data.status !== "error"){
            dispatch(updateProductSuccess(res.data))
        } else{
            dispatch(updateProductError(res.data))
            console.log(updateProductError(res.data))
        } 
    } catch(e){
        dispatch(updateProductError())
    }
}

export const deleteProduct = async (dispatch, id) => {
    dispatch(deleteProductStart())
    try{
        const res = await api.delete(`/products/${id}`)
        if(res.data.status !== "error"){
            dispatch(deleteProductSuccess(res.data))
        } else{
            dispatch(deleteProductError(res.data))
            console.log(deleteProductError(res.data))
        } 
    } catch(e){
        dispatch(deleteProductError())
    }
}
