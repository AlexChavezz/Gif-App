import React from 'react'
import { Navigate } from 'react-router-dom'

export const LoggedRender = ({ children, isLoggedIn }) => {
    return isLoggedIn ?
    <Navigate to="/" />
    :
    children
}
