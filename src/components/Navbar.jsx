import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    // Automatically close navbar when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                {/* Brand */}
                <Link className="navbar-brand fw-bold" to="/">
                    My Website
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="navbarMenu"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div
                    className={`collapse navbar-collapse ${
                        isOpen ? 'show' : ''
                    }`}
                    id="navbarMenu"
                >
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/register">
                                Register
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
