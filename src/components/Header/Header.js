import React from 'react';

import './Header.css';

const Header = ({toggle}) => {

    return (
        <div className="header">
            <div className="logo-container">
                <i className="fas fa-newspaper logo"></i>
                <div className="head">
                <div className="app-name">Headlines Over Voice</div>
                <div className="sub-heading">(Powered By Alan AI)</div>
                </div>
            </div>
            <div className="nav" onClick={toggle}>How to use?</div>
        </div>
    );
}

export default Header;
