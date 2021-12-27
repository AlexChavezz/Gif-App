import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { ButtonLogin } from '../../Button/ButtonLogin';
import closeButtom from '../../pictures/close_black_24dp.svg';
export const Alert = ({setAlertLogin}) => {

    const { loginWithRedirect } = useAuth0();

    return (
        <section 
        className="alert-login-container"
        onClick={()=>setAlertLogin()}
        >
           <article className="modal">
                LOGIN
               <ButtonLogin text="LOG IN" onClick={loginWithRedirect}/>
                <img src={closeButtom} alt="close-button" />
           </article>
        </section>
    )
}
