import React from 'react';

export const LoginFields = ({values, handleInputChange}) => {
    const { email, password } = values;
    return (
        <>
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
        </>
    );
}
