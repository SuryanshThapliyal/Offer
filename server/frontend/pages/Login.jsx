import React from "react"
import {useState} from React

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5173/api")
    }
    return (
        <>
            <form>
                <div>
                    <h1>Register</h1>
                    <hr />
                    <input
                    type="text"
                    placeholder="username"
                    value={}>
                    </input>
                </div>
            </form>
        </>
    )
}