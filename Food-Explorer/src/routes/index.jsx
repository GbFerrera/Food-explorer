import { HashRouter as Router } from "react-router-dom";

import { useAuth  } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdmAppRoutes } from "./admin.app.routes";

export function Routes() {

  const { user } = useAuth()

  const isAdmin = user && user.email === "gabriel@gmail.com";


 return (

  <Router>
  
    
  {isAdmin ? <AdmAppRoutes /> : user ? <AppRoutes /> : <AuthRoutes />}

    
     
  </Router>

 )



}