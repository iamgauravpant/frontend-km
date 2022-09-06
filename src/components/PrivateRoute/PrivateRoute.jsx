// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from "../Context/auth";

// const PrivateRoute = () => {
//     const auth = useAuth();

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }
// export default PrivateRoute;
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PrivateRoute = (props) =>{
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let user = localStorage.getItem("user");
        if(!user){
            navigate("/login");
        }
    })
    return (
        <>
            <Component/>
        </>
    )
}
export default PrivateRoute;