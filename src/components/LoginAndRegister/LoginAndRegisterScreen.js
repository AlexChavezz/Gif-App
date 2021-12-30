import React from 'react';
import welcome from '../../pictures/undraw_welcome_cats_thqn.svg';
import { Form } from './Form';
export const LoginAndRegisterScreen = () => {
    

    return (
        <main>
            <section className="login_and_register">
                <article className="login_and_register_container">
                    <article className="login_and_register_img_container">
                        <img src={welcome} alt="welcome" />
                    </article>
                    <article className="login_and_register_text_container">
                        <h2> Login or Register and starts to save gifs</h2>
                    </article>
                </article>
            </section>
            <section className="forms">
                <Form />
            </section>
        </main>
    )
}
