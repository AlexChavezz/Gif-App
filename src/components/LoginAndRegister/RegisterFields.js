import React from 'react';

export const RegisterFields = ({values, handleInputChange}) => {
    const { name, email, password, confirmPassowrd } = values;
    return (
        <>
        <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                autoComplete="off"
                name="name"
                value={name}
                onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input
                type="password"
                autoComplete="off"
                name="password"
                value={password}
                onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label>Confirm</label>
            <input
                type="password"
                autoComplete="off"
                name="confirmPassowrd"
                value={confirmPassowrd}
                onChange={handleInputChange}
            />
        </div>
    </>
    );
}
