import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        max: 30
    },
    password:{
        type: String,
        required: true
    }
})


export const User = mongoose.model('User', userSchema);