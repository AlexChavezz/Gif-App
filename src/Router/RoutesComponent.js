import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavoriteScreen } from '../components/Favorites/FavoriteScreen';
import GifExpertApp from '../components/GifExpertApp';
import { Header } from '../components/Header/Header';
import { useSelector, useDispatch } from 'react-redux'; 
import { loadGifsFromFirebase } from '../helpers/loadGifsFromFirebase';
import { loadFavoriteGifsAction } from '../actions/favoriteGifs';

export const RoutesComponent = () => {
    // const { setItems } = useContext(ItemsContext);
    // const { auth } = useContext(AuthContext);
    const {uid} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {

        async function getFavoriteGifs(){
            const favoritesItems = await loadGifsFromFirebase(uid);
            dispatch(loadFavoriteGifsAction(favoritesItems));
        }
        getFavoriteGifs();

    }, [])


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
