import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.scss';
import '../VAR/variabl.scss'
function Navbar() {
    const [count, setCount] = useState(0)
    const handeClick = () => {
        alert('test')
        setCount(0)
    };


    return (
        <nav className="navbar">
            <div className='navbar-logo'>
                <Link to="/" className=''>
                    <img src='./image/logo.png' alt='LOGO' width='130' height='130' />
                </Link>
            </div>

            <ul className={'navbar-nav'}>
                <li className="nav-item" style={{ position: 'relative', right: { count } }}>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className="nav-item" style={{ position: 'relative', right: { count } }}>
                    <Link to="/shop" className='nav-link'>Shop</Link>
                </li>
                <li className="nav-item" style={{ position: 'relative', right: { count } }}>
                    <Link to="/events" className='nav-link'>Events</Link>
                </li>
                <li className="nav-item" style={{ position: 'relative', right: { count } }}>
                    <Link to="/servise" className='nav-link'>Services</Link>
                </li>

                <li className="nav-item" style={{ right: { count } }}>
                    <Link to="/news" className='nav-link'>News</Link>
                </li>

                <li className="nav-item" style={{ right: { count } }}>
                    <Link to="/about" className='nav-link'>About Us</Link>
                </li>

                <div className='navbar-icons'>

                    <li className='navbar-panier d-inline-block' >
                        <Link to="/about">
                            <img src='./image/ICONS/panier.png' alt='Panier' className='panier' width='16' height='15' />
                        </Link>

                    </li>

                    <li className="navbar-user d-inline-block" >
                        <Link to="/">
                            <img src='./image/ICONS/user.png' alt='User' width='23' height='23' />
                            <span className='afterUser'></span>
                        </Link>
                    </li>

                    <li className='d-inline-block'>
                        <Link to="/contact" className='navbar-button btn'>Contact</Link>
                    </li>


                </div>
                <div className='navbar-bars' >
                    <li className="" >
                        <Link to="/" onClick={handeClick} >
                            <img src='./image/ICONS/menu.png' alt='Bars' width='27' height='27' />
                        </Link>
                    </li>

                </div>







            </ul>
        </nav >
    );
}

export default Navbar;


