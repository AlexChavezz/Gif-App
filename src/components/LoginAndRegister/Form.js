import React, { useState } from 'react'
import { loginAction, registerAction } from '../../actions/auth';
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
