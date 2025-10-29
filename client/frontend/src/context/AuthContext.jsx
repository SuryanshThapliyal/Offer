import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const[user, setUser] = useState(null);

    useEffect(() => {
    const token = localStorage.getItem("token");
    if (token){
        const username = localStorage.getItem('username')
        setUser({username});
    }
    }, []);

    const register = async (username, password)=>{
        try {
        const res = await axios.post('http://localhost:3000/api/auth/register', {
            username: username,
            password: password
        });
        alert("User registered");
    }catch(err){
        alert(err.response?.data?.message || 'registration failed')
    }
    }

    const login = async (username, password) => {
        try{
        const res = await axios.post("http://localhost:3000/api/auth/login",{
                username:username,
                password:password
            })            
            const {token} = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            setUser({username});
            alert('login successfull');
        }catch(err){
            console.log(err.response?.data);
            alert(err.response?.data?.message || 'login failed');
        }  
    };
    
    const logout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setUser(null);
    }

    return(
        <AuthContext.Provider value= {{user, register,login, logout}}>
            {children}
        </AuthContext.Provider>

    );
};

export function useAuth() {
    return useContext(AuthContext);
}