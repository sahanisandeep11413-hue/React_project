import { createContext, useState } from "react";


 export const Auth = createContext();

export const AuthProvider = ({children})=>{
   
 //const [registeredUsers , setregisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers" || [])));
 const [registeredUsers, setRegisteredUsers] = useState(() => {
  return JSON.parse(localStorage.getItem("registeredUsers")) || [];
}); 
 const [loggedIn, setloggedIn] = useState(JSON.parse(localStorage.getItem("loggedinUser")));


    return <Auth.Provider value={{registeredUsers, setRegisteredUsers , loggedIn,setloggedIn,}}>{children}</Auth.Provider>
}