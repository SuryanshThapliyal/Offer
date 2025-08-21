import React from "react"
import {useState} from 'react'

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/api/auth/login")
    }
    return (
        <>
            <form>
                <div>
                    <h1>Login</h1>
                    <hr />

                    <label htmlFor ="username" >Username </label>
                    <br />
                    <input type="text" placeholder="username" name="username" id="un"/>
                    <br />
                    <label htmlFor="password">Password </label>
                    <br />
                    <input type="password" placeholder='password' name="password" id="pass"/>
                    <br />
                    <button type="submit" class="registerbtn"
                    onClick={handleLogin}>Button</button>
                </div>
            </form>
        </>
    )
}