import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutesComponent } from './RoutesComponent';
import { LoginAndRegisterScreen } from '../components/LoginAndRegister/LoginAndRegisterScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={ <RoutesComponent /> }/>
                <Route path="/auth" element={<LoginAndRegisterScreen />} />
                {/* <Route path="*" element={ <h1>Not found error</h1> }/> */}
            </Routes>
        </BrowserRouter>
    )
}
