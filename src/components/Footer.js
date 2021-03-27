import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>Navigation</h2>
                        <Link to="/">Home</Link>
                        <Link to="/Portfolio">Portfolio</Link>
                        <Link to="/Blog">Blog</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Contact">Contact</Link>
                    </div>
                </div>
            </div>
            <small className="footer-copyright">
                Harrison Short (c) 2021
             </small>
        </div>
    )
}