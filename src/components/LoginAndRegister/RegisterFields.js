import React from 'react';

export const RegisterFields = () => {
    return (
        <>
        <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                autoComplete="off"
            />
        </div>
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
        <div className="form-group">
            <label>Confirm</label>
            <input
                type="password"
                autoComplete="off"
            />

            {/* <p> You have a account ?</p> <span>Login</span> */}
        </div>
    </>
    );
}
