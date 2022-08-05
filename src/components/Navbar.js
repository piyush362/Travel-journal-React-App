import React from 'react'
import './style.css'
export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav--info'>
                <img src='../images/globe.png' className='nav--logo'></img>
                <h3 className='nav-title'>My Travel Journal</h3>
            </div>
        </nav>
    )
}
