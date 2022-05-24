import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: undefined,
        country: undefined,
        email: undefined,
        password: undefined,
        city: undefined,
        phone: undefined,
        img: undefined
    })

    const handleChange = (e) =>{
        setCredentials(prev=>({
            ...prev, [e.target.id] : e.target.value
        }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://booking-react-node.herokuapp.com/api/auth/register",credentials)
            console.log(res)
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className="login">
            <div className="lContainer">
            <h2>Register</h2>
            <hr className='lLine'/>
                <label>Username:</label>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <label>Country:</label>
                <input
                    type="text"
                    placeholder="country"
                    id="country"
                    onChange={handleChange}
                    className="lInput"
                />
                <label>City:</label>
                <input
                    type="text"
                    placeholder="city"
                    id="city"
                    onChange={handleChange}
                    className="lInput"
                />
                <label>Phone:</label>
                <input
                    type="number"
                    placeholder="phone"
                    id="phone"
                    onChange={handleChange}
                    className="lInput"
                />
                <label>Image:</label>
                <input
                    type="file"
                    placeholder="img"
                    id="img"
                    onChange={handleChange}
                    className="lInput"
                />
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
                <button className="lButton" onClick={handleClick}>
                    Register
                </button>
            </div>
        </div>
  )
}

export default Register