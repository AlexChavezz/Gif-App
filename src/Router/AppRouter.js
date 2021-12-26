import React from 'react';
// import GifExpertApp from '../components/GifExpertApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutesComponent } from './RoutesComponent';
import { useAuth0 } from '@auth0/auth0-react';
export const AppRouter = () => {

    const { isAuthenticated, user } = useAuth0();
    // console.log(user.sub)
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="*" element={ <RoutesComponent /> }/>
                {/* <Route path="/" element={ <Routes /> }/> */}
            </Routes>
        </BrowserRouter>
    )
}
