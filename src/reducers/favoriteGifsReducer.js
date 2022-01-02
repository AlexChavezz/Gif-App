import { types } from "../types/types";

const initialState = [];


export const favoriteGifsReducer = ( state =initialState, action) => {
    switch(action.type){
        case types.addNewGif:
            return [ ...state, action.payload]
        case types.loadGifs:
            return [ ...action.payload]
        case types.removeGifs:
            return state.filter(item => item.id !== action.payload)
            default: 
        return state;
    }
}
