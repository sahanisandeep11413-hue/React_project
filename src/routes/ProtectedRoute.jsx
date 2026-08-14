import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from "../context/AuthContext";

const ProtectedRoute = () => {
  
 const {loggedIn} = useContext(Auth);

 if(!loggedIn){
    return <Navigate to={"/"} /> 
 }
return <Outlet />
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProtectedRoute
