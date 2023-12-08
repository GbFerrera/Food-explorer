import {Routes, Route } from "react-router-dom"

import { Menu } from "../pages/common_user/Menu"
import { Food } from "../pages/common_user/Food"
import { Home } from "../pages/common_user/Home"

export function AppRoutes(){

return(

<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/Food" element={<Food/>}/>

</Routes>

)

}