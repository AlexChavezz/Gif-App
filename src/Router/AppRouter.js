import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutesComponent } from './RoutesComponent';
export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={ <RoutesComponent /> }/>
                {/* <Route path="/" element={ <Routes /> }/> */}
            </Routes>
        </BrowserRouter>
    )
}
