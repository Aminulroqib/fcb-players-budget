import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
    <div className='header'>
        <img src={logo} className="rounded mx-auto d-block" alt=""/>
        <h2 className='d-flex justify-content-center bg-dark bg-gradient text-white'>FCB Players Budget</h2> 
    </div >
    );
};

export default Header;