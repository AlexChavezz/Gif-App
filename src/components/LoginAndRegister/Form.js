import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import { userFetch } from '../../helpers/userFetch';
import { useForm } from '../../hooks/useForm';
import { LoginFields } from './LoginFields';
import { RegisterFields } from './RegisterFields';

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

    const { setIsLoggedIn } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const userToLogin = {
            email: values.email,
            password: values.password
        }
        const userToRegister = {
            ...values,
        }
        if (state === "login") {
            userFetch('login', userToLogin);
        } else {
            userFetch('register', userToRegister);
        }
        setIsLoggedIn(true);
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
