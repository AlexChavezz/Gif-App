import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Link } from 'react-router-dom';
import star from '../../pictures/star_black_24dp.svg';
import search from '../../pictures/search_black_24dp.svg';

export const Header = () => {


    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    const handleLogin = () => {
        loginWithRedirect();
    }
    const handleLogOut = () => {
        logout();
    }
    
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <img src={search} alt="search-img" />
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <img src={star} alt="star-img" />
                        <Link to="/favorites" >
                            Favorites
                        </Link>
                    </li>
                </ul>
                <ul>
                    {
                        isAuthenticated ?
                            (<li
                                className="auth-buttons"
                                onClick={handleLogOut}
                            >
                                Log Out
                            </li>)
                            :
                            (<li
                                className="auth-buttons"
                                onClick={handleLogin}
                            >
                                Log In
                            </li>)
                    }
                </ul>
            </nav>
        </header>
    );
}
