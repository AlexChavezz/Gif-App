import React from 'react';
import { ButtonLogin } from '../../Button/ButtonLogin';
export const Alert = ({setAlertLogin}) => {

    // const { loginWithRedirect } = useAuth0();

    return (
        <section 
        className="alert-login-container"
        onClick={()=>setAlertLogin()}
        >
           <article className="modal">
                LOGIN
               {/* <ButtonLogin text="LOG IN" onClick={loginWithRedirect}/> */}
                <img src='./pictures/close_black_24dp.svg' alt="close-button" />
           </article>
        </section>
    )
}
