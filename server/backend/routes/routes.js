import express from 'express'
import {User} from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/api/auth/register', async (req, res) => {
    try{
        const {username, password} = req.body;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({username, password: hashedPassword})
        .then((result) => {
            res.status(201).json({message: 'User registered', user: result})
        }).catch((err) => {
            res.status(500).json({error: err.message});
        });
        user.save();
    } catch(err){
        res.status(500).json({error: err.message});
    }
    
});

router.post('/api/auth/login', async (req, res) => {
const {username, password} = req.body;
    const storedPass = await User.findOne({username:username}).lean();
    if(storedPass){
        const isMatch = await bcrypt.compare(password, storedPass.password);
        if(isMatch){
            res.json({message: 'Login successful'});
        } else {
            res.status(401).json({message: 'Invalid credentials'});
        }
    } else {
        res.status(404).json({message: 'User not found'});
    }
    jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_KEY,
        { expiresIn: '1h' },
    )
})


export default router;