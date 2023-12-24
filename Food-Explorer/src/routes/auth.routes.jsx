import {Routes, Route } from "react-router-dom"

import {SingUp} from "../pages/login/Sing-Up"
import {SingIn} from "../pages/login/Sing-In"


export function AuthRoutes(){

return(

<Routes>

  <Route path="https://gbferrera.github.io/Food_explorer-Front/" element={<SingIn/>}/>
  <Route path="/register" element={<SingUp/>}/>

</Routes>

)

}