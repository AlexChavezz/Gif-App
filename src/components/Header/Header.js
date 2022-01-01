import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

export const Header = () => {

    // const handleLogin = () => {
    //     loginWithRedirect();
    // }
    
    const { setAuth, setIsLoggedIn } = useContext(AuthContext);

    const handleLogOut = () => {
        localStorage.removeItem('token');
        setAuth({});
        setIsLoggedIn(false);
    }

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
                    (<li
                        className="auth-buttons"
                        onClick={handleLogOut}
                    >
                        Log Out
                    </li>)
                    :
                    {/* (<li
                        className="auth-buttons"
                        // onClick={handleLogin}
                    >
                        Log In
                    </li>) */}
                </ul>
            </nav>
        </header>
    );
}
