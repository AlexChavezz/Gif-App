import React from 'react';

export const LoginFields = () => {
    return (
        <>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    autoComplete="off"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    autoComplete="off"
                />
            </div>
            {/* <p> You have not a account ?</p> <span>Register</span> */}
        </>
    );
}
