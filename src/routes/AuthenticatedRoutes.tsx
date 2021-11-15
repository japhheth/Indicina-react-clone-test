import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';



const AuthenticatedRoutes = ({ children }: { children: JSX.Element }) => {
    const isAuthed = !!localStorage.getItem('token');
    let location = useLocation();
    if (!isAuthed) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;

};



export default AuthenticatedRoutes;