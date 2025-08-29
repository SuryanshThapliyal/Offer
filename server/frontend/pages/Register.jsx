import { useState } from "react";
import axios from 'axios';


export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        try{
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/api/auth/register', {
            username: username,
            password: password
        });
        alert(res.data.message);
    }catch (err) {
        alert(err.response?.data?.message || "error registering")
    }
    };
    
    return (
        <>
            <form>
                <div>
                    <h1>Register</h1>
                    <hr />

                    <label htmlFor ="username" >Username </label>
                    <br />
                    <input type="text" placeholder="username" name="username" id="un" onChange={(e) => setUsername(e.target.value)}/>
                    <br />
                    <label htmlFor="password">Password </label>
                    <br />
                    <input type="password" placeholder='password' name="password" id="pass" onChange={(e) => setPassword(e.target.value)}/>
                    <br />
                    <button type="submit" class="registerbtn"
                    onClick={handleRegister}>Button</button>
                </div>
            </form>
        </>
    )
}