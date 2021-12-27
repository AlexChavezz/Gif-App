import React from 'react';

export const ButtonLogin = ({ text, onClick }) => {

    return (
        <button
        className="auth-buttons"
        onClick={ onClick }
        >
           { text }
        </button>
    )
}
