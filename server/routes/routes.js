import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

const router = express.router()

router.post('/api/auth/register', (req, res) => {
    try{
        const {username, password} = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({username, password: hashedPassword})
        res.status(201).json({message: 'User registered', user})
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

router.post('/api/auth/login', (req, res) => {

})