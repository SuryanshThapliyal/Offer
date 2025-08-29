import React from "react"
import {useState} from 'react'
import axios from 'axios'

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        try{
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/api/auth/login', {
            username: username,
            password: password
        });
        alert(res.data.message);
    }
    catch (err) {
        alert(err.response?.data?.message || "error logging in");
    }
    }
    return (
        <>
            <form>
                <div>
                    <h1>Login</h1>
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
                    onClick={handleLogin}>Button</button>
                </div>
            </form>
        </>
    )
}