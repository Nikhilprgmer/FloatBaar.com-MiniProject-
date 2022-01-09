import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Register from "../register/register"

const Login = ({ setLoginUser}) => {

    const Navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => { alert(res.data.message) 
            setLoginUser(res.data.user)
            Navigate(`/`)
        })
    }   
    return (
        <div className="login">
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login} >Login</div>
            <div className="or"> or</div>
            <div className="button" onClick={() => Navigate(`/register/`)}>Register</div>
    </div>
    )
}
export default Login
