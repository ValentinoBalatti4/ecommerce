import axios from 'axios'

const BASE_URL = 'https://ecommerce-eight-dusky.vercel.app/api'
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;

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