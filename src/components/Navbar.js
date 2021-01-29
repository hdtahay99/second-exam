import React from 'react';
import { Link } from 'react-router-dom';
import backPage from '../images/chevron-left.svg'
import './styles/Navbar.css';


export const Navbar = ({course, title}) => {
    return (
        <div className="Navbar">
            <div className="container-fluid">
                <Link to='/'>
                    <img src={backPage} alt="Back page" className="Navbar__img" />
                </Link>
                <span className="navbar-text Navbar__course">{course}</span>
                <span className="Navbar__title">{title}</span>
            </div>
        </div>
    )
}
