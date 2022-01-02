import { types } from "../types/types";
import { closeLoading } from "./loading";

export const validSession = () => {
    return ( displatch ) => {
        const token = JSON.parse(localStorage.getItem('token'));
        fetch('http://localhost:8080/api/auth/validate', {
            headers: {
                'x-token': token
            }
        })
        .then( res => res.json())
        .then( authRes => {
            displatch(login(authRes));
            displatch(closeLoading());
        })
    }
}

export const logout = () => ({
    type: types.logout, 
})

const login = (authState) => ({
    type: types.login,
    payload: authState
})