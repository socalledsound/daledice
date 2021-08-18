import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header.css';


const Header = ({currentUser}) => {
    return (
        <div className='navContainer'>
            <nav className="nav">
                <div className="linkContainer">
                    { 
                        !currentUser &&
                            <NavLink to='/login' className='link'>Login</NavLink>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header;