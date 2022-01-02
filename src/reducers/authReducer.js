import { types } from "../types/types";

const initialState = {
    name: null,
    email: null,
    uid:null,
    isLoading: true, 
    isLoggedIn: false
}

export const authReducer = (state = initialState, action) => {
    switch (action?.type) {
        case types.login:
            return {
                ...state, 
                ...action.payload,
                isLoading: false,
                isLoggedIn: true,
            }
        case types.logout:
            return {
                ...state, 
                isLoading: false, 
                isLoggedIn: false,
            }
        default:
            return state;
    }
}
