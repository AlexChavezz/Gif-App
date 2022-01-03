import { types } from "../types/types";
import { closeLoading } from "./loading";
import Swal from 'sweetalert2';

export const loginAction = ( email, password) => {
    return async ( dispatch ) => {
        const body = await fetch('https://gif-app-back-end.herokuapp.com/api/auth/login', {
            method:"POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        const { jwt:token, user, msg }= await body.json();
        if( msg ){
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text:msg
            })
            dispatch(closeLoading());
            return;
        }

        localStorage.setItem('token', JSON.stringify(token));
        dispatch(login(user));
        dispatch(closeLoading());
    }
}

export const registerAction = (name, email, password) => {
    return async ( dispatch ) => {
        const body = await fetch('https://gif-app-back-end.herokuapp.com/api/auth/register', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        const {jwt:token, user, errors} = await body.json();
        if( errors ){
            Swal.fire({
                title:'Error', 
                icon:'error', 
                text:errors[0].msg
            })
            dispatch(closeLoading());
            return;
        }
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(login(user));
        dispatch(closeLoading());
    } 
}


export const validSession = () => {
    return ( displatch ) => {
        const token = JSON.parse(localStorage.getItem('token'));
        fetch('https://gif-app-back-end.herokuapp.com/api/auth/validate', {
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