require('dotenv').config()
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



router.post("/register", async (req, res) => {
    try{
        const existUsername = await User.findOne({username: req.body.username})
        console.log(existUsername)
        if(existUsername){
            res.json({status: "error", message: "Username is already in use!"})
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 5)

        const newUser = await User.create({
            username: req.body.username,
            password: hashedPassword
        })

        res.json({status:'success'})

    }catch(err){    
        res.json({status: 'error', message: err})
    }
})


router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({
            username: req.body.username
        })

        if(!user){
            res.json({status: 'error', message: 'User not found'})
        } else{
            const validPassword = await bcrypt.compare(req.body.password, user.password)

            if(!validPassword){
                res.json({status: 'error', message: 'Invalid password'})
            } else{
                const token = jwt.sign(
                    {username: user.username},
                    process.env.JWT_KEY
                )
                
                const { password, ...others } = user._doc

                res.json({status:'success', ...others, token})
            }
        }
    } catch(err){
        res.json({status:'error', message: err})
    }
})

router.post('/logout', async (req, res) => {
    try{
        // invalidate token by deleting it from the client-side
        res.clearCookie('token')
        res.json({status: 'success'})
    } catch(err){
        res.json({status:'error', message: err})
    }
})

module.exports = router
