import './Login.css'
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setCredentials(prev=>({
            ...prev, [e.target.id] : e.target.value
        }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"})
        try {
            const res = await axios.post("https://booking-react-node.herokuapp.com/api/auth/login", credentials)
            dispatch({type:"LOGIN_SUCCESS", payload: res.data.details})
            navigate('/')
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
        }
    }

    return (
        <div className="login">
            <div className="lContainer">
            <h2>Booking</h2>
            <hr className='lLine'/>
            <label>Email:</label>
                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                    className="lInput"
                />
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <hr/>
                <button disabled={loading} className="lButton" onClick={handleClick}>
                    Login
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login
