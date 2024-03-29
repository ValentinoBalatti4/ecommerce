import axios from 'axios'

const BASE_URL = 'https://ecommerce-eight-dusky.vercel.app/api/'
let TOKEN = ""
try{
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token
} catch{}


export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});