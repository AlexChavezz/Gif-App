import React, { useState } from 'react'
import { LoginFields } from './LoginFields';
import { RegisterFields } from './RegisterFields';

export const Form = () => {
    
    const [state, setstate] = useState("login");


    const handleChange = () => {
        if(state === "login"){
            setstate("register")
        }else{
            setstate("login")
        }
    }

    return (
        <form>
            <h3>{state === "login" ? "LOGIN" : "REGISTER"}</h3>
            {
                state === "login" ?
                    <LoginFields />
                    :
                    <RegisterFields />
}

            <input type="submit" className="submit_button" />

            <p>{ state === "login"? "I haven't a account":"I have a account"}</p> <span
            onClick={handleChange}
            >
                { state === "login"? "Register":"Login" }
            </span>
        </form>
    );
}
