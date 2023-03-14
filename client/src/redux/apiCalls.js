import {loginStart, loginSuccess, loginError} from "./userRedux"
import axios from "axios"

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try{
        const res = await axios.post('http://localhost:4444/api/auth/login', user)
            if(res.data.status !== "error"){
                dispatch(loginSuccess(res.data))
            } else{
                dispatch(loginError(res.data))
                console.log(loginError(res.data))
            }
    } catch(err){
        dispatch(loginError(err))
    }
}