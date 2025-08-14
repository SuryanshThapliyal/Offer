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

await mongoose.connect("mongodb://localhost:27017/offer");
console.log('Connected to database');


export const User = mongoose.model('User', userSchema);