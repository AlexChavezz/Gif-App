import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonLogin } from '../../Button/ButtonLogin';
export const Alert = ({setAlertLogin}) => {

    return (
        <section 
        className="alert-login-container"
        onClick={()=>setAlertLogin()}
        >
           <article className="modal">
                LOGIN
            <Link to="/auth">
               <ButtonLogin text="LOG IN"/>
            </Link>
                <img src='./pictures/close_black_24dp.svg' alt="close-button" />
           </article>
        </section>
    )
}
