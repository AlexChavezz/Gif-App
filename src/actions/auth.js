import { types } from "../types/types";
import { closeLoading } from "./loading";

export const loginAction = ( email, password) => {
    return async ( dispatch ) => {
        const body = await fetch('http://localhost:8080/api/auth/login', {
            method:"POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        const {jwt:token, user} = await body.json();
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(login(user));
        dispatch(closeLoading());
    }
}

export const registerAction = (name, email, password) => {
    return async ( dispatch ) => {
        const body = await fetch('http://localhost:8080/api/auth/register', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        const {jwt:token, user} = await body.json();
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(login(user));
        dispatch(closeLoading());
    } 
}


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