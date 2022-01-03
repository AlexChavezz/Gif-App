import { loadGifsFromFirebase } from "../helpers/loadGifsFromFirebase";
import { types } from "../types/types";

export const loadFavoriteGifsAsync = (uid) => {
    return async ( dispatch ) => {
        const favoritesItems = await loadGifsFromFirebase(uid);
        dispatch(loadFavoriteGifs(favoritesItems));
    }
}

export const favoriteGifs = (newGif) => ({
    type: types.addNewGif,
    payload: newGif
})

export const removeGifs = (id) => ({
    type: types.removeGifs,
    payload: id
})

export const loadFavoriteGifs = ( gifs ) => ({
    type: types.loadGifs,
    payload: gifs
})