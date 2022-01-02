import { types } from "../types/types";

const initialState = {
    name: null,
    email: null,
    uid:null,
    isLoggedIn: false
}

export const authReducer = (state = initialState, action) => {
    switch (action?.type) {
        case types.login:
            return {
                ...state, 
                ...action.payload,
                isLoggedIn: true,
            }
        case types.logout:
            return {
                ...state, 
                isLoggedIn: false,
            }
        default:
            return state;
    }
}
