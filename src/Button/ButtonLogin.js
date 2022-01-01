import React from 'react';

export const ButtonLogin = ({ text }) => {

    return (
        <button
        className="auth-buttons"
        // onClick={ onClick }
        >
           { text }
        </button>
    )
}
