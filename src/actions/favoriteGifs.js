import { types } from "../types/types";

export const favoriteGifs = (newGif) => ({
    type: types.addNewGif,
    payload: newGif
})

export const removeGifs = (id) => ({
    type: types.removeGifs,
    payload: id
})

export const loadFavoriteGifsAction = ( gifs ) => ({
    type: types.loadGifs,
    payload: gifs
})