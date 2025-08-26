import express from 'express'
import {User} from '../models/User.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/api/auth/register', async (req, res) => {
    try{
        const {username, password} = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({username, password: hashedPassword})
        user.save()
        .then((result) => {
            res.status(201).json({message: 'User registered', user: result})
        }).catch((err) => {
            res.status(500).json({error: err.message});
        });
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

router.post('/api/auth/login', (req, res) => {
    const {username, password} = req.body;
    res.json({message: 'Login route'}); 
    const storedPass = User.findOne({username: username});
    if(storedPass){
        const isMatch = bcrypt.compare(password, storedPass.password);
        if(isMatch){
            res.json({message: 'Login successful'});
        } else {
            res.status(401).json({message: 'Invalid credentials'});
        }
    } else {
        res.status(404).json({message: 'User not found'});
    }
})


export default router;