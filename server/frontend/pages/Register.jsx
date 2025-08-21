import { useState } from "react";

const handleRegister = async (e) => {
    e.preventDefault();

}

export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
            <form>
                <div>
                    <h1>Register</h1>
                    <hr />

                    <label htmlFor ="username" >Username </label>
                    <br />
                    <input type="text" placeholder="username" name="username" id="username"
                    onChange={}/>
                    <br />
                    <label htmlFor="password">Password </label>
                    <br />
                    <input type="password" placeholder='password' name="password" id="password"/>
                    <br />
                    <button type="submit" class="registerbtn"
                    onClick={handleRegister}>Button</button>
                </div>
            </form>
        </>
    )
}