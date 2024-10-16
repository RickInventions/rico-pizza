import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import logo from '../Pages/Assets/logo.png';
import './Header.css';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false); // Close the menu when location changes
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`Header ${isSticky ? 'sticky' : ''}`}>
            <div className="logo-cont">
                <img src={logo} alt="rico-pizzas" className='logo'/>
            </div>
            <div className="nav-cont">
                 <NavLink to="/">Home</NavLink>
                        <NavLink to="/Menu">Menu</NavLink>
                        <NavLink to="/Gallery">Gallery</NavLink>
                        <NavLink to="/About">About</NavLink>
                        <NavLink to="/Contact">Contact</NavLink>
            </div>
            <div className="nav-btn-cont">
                {isMenuOpen ? (
                    <Icon.X className='nav-btn' onClick={toggleMenu} />
                ) : (
                    <Icon.ListNested className='nav-btn' onClick={toggleMenu} />
                )}
                <div className={`collapse ${isMenuOpen ? 'show' : ''}`} id="collapseExample">
                    <div className="card card-body">
                         <NavLink to="/">Home</NavLink>
                        <NavLink to="/Menu">Menu</NavLink>
                        <NavLink to="/Gallery">Gallery</NavLink>
                        <NavLink to="/About">About</NavLink>
                        <NavLink to="/Contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
