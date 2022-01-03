import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';
import { cleanGifsAfterToLogout } from '../../actions/favoriteGifs';

export const Header = () => {

    const { isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(cleanGifsAfterToLogout());
        dispatch(logout());
        localStorage.removeItem('token');
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <img src='./search_black_24dp.svg' alt="search-img" />
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <img src='./star_black_24dp.svg' alt="star-img" />
                        <Link to="/favorites" >
                            Favorites
                        </Link>
                    </li>
                </ul>
                <ul>
                    {
                        isLoggedIn ?
                            (
                                (<li
                                    className="auth-buttons"
                                    onClick={handleLogout}
                                >
                                    Log out
                                </li>)
                            ) : (
                                <Link to="/auth">
                                    <li
                                        className="auth-buttons"
                                    >
                                        Log In
                                    </li>
                                </Link>
                            )
                    }

                </ul>
            </nav>
        </header>
    );
}