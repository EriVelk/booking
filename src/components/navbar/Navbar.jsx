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

    const logout = () => {
        console.log("Logout")
        localStorage.removeItem('user')
        navigate('/')
        window.location.reload()
    }

    return (
        <div className='navbar'>
            <div className='navContainer'>
            <Link to="/" style={{color:'inherit', textDecoration:'none', fontSize:'30px'}}>
            <span className='logo'>Booking</span>
            </Link>
                {user ? ( <div className='navItems'>
                    <button className='navButton' disabled={true}>{user.username}</button>
                    <button className='navButton' onClick={logout}>Logout</button>
                </div>) : (<div className='navItems'>
                    <button className='navButton' onClick={register}>Register</button>
                    <button className='navButton' onClick={login}>Login</button>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar