import {loading, loginSuccess, loginError, logoutSuccess, logoutError } from "./userRedux"
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

export const register = async (dispatch, user) => {
    dispatch(loading())
    try{
        const res = await api.post('/auth/register', user)
        if(res.data.status !== "error"){
            dispatch(loginSuccess())
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