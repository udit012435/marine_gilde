import React from "react";
import img from './assets/Logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-shadow" style={{ backgroundColor: 'rgb(140, 149, 224)' }}>
                <div className="container-fluid">
                    {/* Logo */}
                    <img src={img} alt="" style={{ width: '80px', height: '60px' }} />
                    {/* <a className="navbar-brand"> <img src={img} alt="Logo" width="60" height="60" className="d-inline-block align-text-top"/></a> */}

                    {/* Toggler Button for Mobile */}
                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                            <li className="nav-item">
                                <Link className="nav-link active " aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">ABOUT</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link " to="service">SERVICE</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link " to="project">PROJECT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="team">TEAM</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="career">CAREER</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="contact">CONTACT</Link>
                            </li>
                        </ul>

                        {/* Login and Signup Buttons */}
                        <form className="d-flex">
                            <button id="buton" className="btn btn-outline-warning mx-2 " type="submit">
                                <Link to="login" className="text-decoration-none fw-bold" >LOGIN</Link>
                            </button>
                            <button id="buton" className="btn btn-outline-warning mx-2" type="submit">
                                <Link to="register" className="text-decoration-none fw-bold">SIGNUP</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

