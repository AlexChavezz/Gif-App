import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutesComponent } from './RoutesComponent';
import { LoginAndRegisterScreen } from '../components/LoginAndRegister/LoginAndRegisterScreen';
import { AuthContext } from '../Context/AuthContext';
import { LoggedRender } from './LoggedRender';

export const AppRouter = () => {

    const [auth, setAuth] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {

        async function getToken() {
            const token = JSON.parse(localStorage.getItem('token'));
            console.log(token)
            if (token) {
                const body = await fetch('http://localhost:8080/api/auth/validate', {
                    method: "GET",
                    headers: {
                        'x-token': token,
                    }
                })
                const res = await body.json();
                setAuth({ ...res, isAuthenticated: true });
                setIsLoggedIn(true);
            }
        }
        getToken();

    }, [])


    return (
        <AuthContext.Provider value={{
            auth,
            setAuth, 
            isLoggedIn,
            setIsLoggedIn
        }}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/*" element={<RoutesComponent />} />


                    <Route path="/auth" element={
                        <LoggedRender isLoggedIn={isLoggedIn}>
                            <LoginAndRegisterScreen />
                        </LoggedRender>
                    } />

                    {/* <Route path="*" element={ <h1>Not found error</h1> }/> */}
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
