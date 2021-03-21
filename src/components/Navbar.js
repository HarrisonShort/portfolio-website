import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const menuIcon = "fas fa-bars";
const closeIcon = "fas fa-times";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">HARRISON SHORT</Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? closeIcon : menuIcon} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/portfolio' className="nav-links" onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog' className="nav-links" onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar
