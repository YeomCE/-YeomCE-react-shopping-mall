import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <h2>ShoeShop</h2>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/cart'}><li>Cart</li></Link>
            </ul>
        </div>
    )
}

export default NavBar