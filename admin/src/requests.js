import axios from 'axios'

const BASE_URL = 'http://localhost:4444/api/'
let TOKEN = ""
try{
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token
} catch{}


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

