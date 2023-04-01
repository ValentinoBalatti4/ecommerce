import axios from 'axios'

try{
    const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token
} catch{
    
}



export const api = axios.create({
    baseURL: 'http://localhost:4444/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

