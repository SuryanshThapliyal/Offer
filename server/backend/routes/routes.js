import express from 'express'
import {User} from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import auth from '../middleware/auth.js'

dotenv.config();
const router = express.Router()

router.post('/api/auth/register', async (req, res) => {
    try{
        const {username, password} = req.body;
        const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({username, password: hashedPassword})
        .then((result) => {
            res.status(201).json({message: 'User registered', user: result})
        }).catch((err) => {
            res.status(500).json({error: err.message});
        });
    } catch(err){
        res.status(500).json({error: err.message});
    }
    
});

router.post('/api/auth/login', async (req, res) => {
    try{
const {username, password} = req.body;
    const storedPass = await User.findOne({username:username}).lean();
    if(storedPass){
        const isMatch = await bcrypt.compare(password, storedPass.password);
        if(!isMatch){
            res.status(401).json({message: 'Invalid credentials'});
        }
    } else {
        res.status(404).json({message: 'User not found'});
    }
    const token = jwt.sign(
        { id: storedPass._id, username: storedPass.username },
        process.env.JWT_KEY,
        { expiresIn: '1h' },
    )
    res.json({message: 'Login successful', token});
} catch(err){
    res.status(500).json({error: err.message});
}
});

router.get('/api/auth/protected', auth, async (req, res) => {
    res.json({message: 'This is a protected route', user: req.user});
});

export default router;