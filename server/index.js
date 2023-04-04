const mongo = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config()

//Routes
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')
const stripeRouter = require('./routes/stripe')

const app = express();
  
app.use(cors())
app.use(express.json())


// MongoDb setUp
mongo.connect(process.env.MONGO_KEY)
.then(()=>{
    console.log("[+] Database connected!")
})
.catch((e)=>{
    console.log("[!] Failed to connect!", e.message)
})


app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/products", productRouter)
app.use("/api/carts", cartRouter)
app.use("/api/orders", orderRouter)
app.use("/api/checkout", stripeRouter)


app.listen(4444, () => {
    console.log(`Server is running on: http://127.0.0.1:4444`);
})



