import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import "./navbar.css"

const Navbar = () => {

    const {user} = useContext(AuthContext)

    const navigate = useNavigate();

    const login = () => {
        navigate('/login')
    }

    const register = () => {
        navigate('/register')
    }

    return (
        <div className='navbar'>
            <div className='navContainer'>
            <Link to="/" style={{color:'inherit', textDecoration:'none', fontSize:'30px'}}>
            <span className='logo'>Booking</span>
            </Link>
                {user ? user.username : (<div className='navItems'>
                    <button className='navButton' onClick={register}>Register</button>
                    <button className='navButton' onClick={login}>Login</button>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar