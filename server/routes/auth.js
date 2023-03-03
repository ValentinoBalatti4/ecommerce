require('dotenv').config()
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')




router.post("/register", async (req, res) => {
    try{

        const hashedPassword = await bcrypt.hash(req.body.password, 5)
        const newUser = await User.create({
            username: req.body.username,
            password: hashedPassword
        })

        res.json({status: 'success'})

    }catch(err){
        res.json({status: 'error', error: err.message})
    }
})


router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({
            username: req.body.username
        })

        if(!user){
            res.json({status: 'error', error: 'User not found'})
        } else{
            const validPassword = await bcrypt.compare(req.body.password, user.password)

            if(!validPassword){
                res.json({status: 'error', error: 'Invalid password'})
            } else{
                const token = jwt.sign(
                    {username: user.username},
                    process.env.JWT_KEY
                )

                res.json({status:'success', token: token})
                res.redirect('/')
            }
        }
    } catch(err){
        res.json({status:'error', error: err})
    }
})

module.exports = router
