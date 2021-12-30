import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {

    // const handleLogin = () => {
    //     loginWithRedirect();
    // }
    // const handleLogOut = () => {
    //     logout();
    // }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <img src='./pictures/search_black_24dp.svg' alt="search-img" />
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <img src='./pictures/star_black_24dp.svg' alt="star-img" />
                        <Link to="/favorites" >
                            Favorites
                        </Link>
                    </li>
                </ul>
                <ul>
                    <Link to="/auth">
                        <li
                            className="auth-buttons"
                        // onClick={handleLogin}
                        >
                            Log In
                        </li>
                    </Link>
                    {/* {
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
                    } */}
                </ul>
            </nav>
        </header>
    );
}
