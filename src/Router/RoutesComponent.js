import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavoriteScreen } from '../components/Favorites/FavoriteScreen';
import GifExpertApp from '../components/GifExpertApp';
import { Header } from '../components/Header/Header';
import { useSelector, useDispatch } from 'react-redux'; 
import { loadFavoriteGifsAsync } from '../actions/favoriteGifs';

export const RoutesComponent = () => {

    const {uid} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        if( uid ){
            dispatch(loadFavoriteGifsAsync(uid));
        }
    }, [dispatch, uid])


    return (
        <div className="container">
            <Header />
            <Routes>
                <Route exact path="/" element={<GifExpertApp />} />
                <Route path="/favorites" element={<FavoriteScreen />} />
                <Route path="*" element={<h4>not found</h4>} />
            </Routes>
        </div>
    )
}
