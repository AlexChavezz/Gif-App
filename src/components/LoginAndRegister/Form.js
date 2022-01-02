import React, { useContext, useState } from 'react'
import { loginAction, registerAction } from '../../actions/auth';
import { AuthContext } from '../../Context/AuthContext';
import { ItemsContext } from '../../Context/ItemsContext';
import { loadGifsFromFirebase } from '../../helpers/loadGifsFromFirebase';
import { userFetch } from '../../helpers/userFetch';
import { useForm } from '../../hooks/useForm';
import { LoginFields } from './LoginFields';
import { RegisterFields } from './RegisterFields';
import { useDispatch } from 'react-redux';
import { openLoading } from '../../actions/loading';

export const Form = () => {

    const [state, setstate] = useState("login");
    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassowrd: '',
    });
    const handleChange = () => {
        if (state === "login") {
            setstate("register")
        } else {
            setstate("login")
        }
        reset();
    }

    // const { setIsLoggedIn } = useContext(AuthContext)
    // const { setItems } = useContext(ItemsContext);
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const userToLogin = {
    //         email: values.email,
    //         password: values.password
    //     }
    //     const userToRegister = values;
    //     if (state === "login") {
    //         const uid = await userFetch('login', userToLogin);
    //         const items = await loadGifsFromFirebase(uid);
    //         setItems(items);
    //     } else {
    //         console.log(userToRegister)
    //         const uid = await userFetch('register', userToRegister);
    //         const items = await loadGifsFromFirebase(uid);
    //         setItems(items);
    //     }
    //     setIsLoggedIn(true);
    // }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state === "login") {
            dispatch(openLoading());
            dispatch(loginAction(values.email, values.password));
        }else{
            dispatch(openLoading());
            dispatch(registerAction(values.name, values.email, values.password));
        }
    }


    return (
        <form>
            <h3>{state === "login" ? "LOGIN" : "REGISTER"}</h3>
            {
                state === "login" ?
                    <LoginFields values={values} handleInputChange={handleInputChange} />
                    :
                    <RegisterFields values={values} handleInputChange={handleInputChange} />
            }
            <input
                type="submit"
                onClick={handleSubmit}
                className="submit_button"
            />

            <p>{state === "login" ? "I haven't a account" : "I have a account"}</p><span
            onClick={handleChange}
            >
                {state === "login" ? "Register" : "Login"}
            </span>
        </form>
    );
}
