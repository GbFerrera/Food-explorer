import { BrowserRouter } from "react-router-dom";

import { useAuth  } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdmAppRoutes } from "./admin.app.routes";

export function Routes() {

  const { user } = useAuth()

 return (

  <BrowserRouter>
  
    
    {/* {user ? <AppRoutes/> : <AuthRoutes/>} */}

    <AdmAppRoutes/>
     
  </BrowserRouter>

 )



}