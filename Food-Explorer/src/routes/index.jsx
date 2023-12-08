import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdmAppRoutes } from "./admin.app.routes";

export function Routes() {

 return (

  <BrowserRouter>

    <AdmAppRoutes/>
     
  </BrowserRouter>

 )



}