import {Routes, Route} from "react-router-dom"


import {EditFood} from "../pages/admin_user/edit_food"
import {AdminFood} from "../pages/admin_user/Food"
import {HomeAdmin} from "../pages/admin_user/Home"
import {MenuAdmin} from "../pages/admin_user/menu"
import { NewFood } from "../pages/admin_user/new_food"

export function AdmAppRoutes(){

  return(

 <Routes>

   <Route path="/" element={<HomeAdmin/>}/>
   <Route path="/food" element={<AdminFood/>}/>
   <Route path="/edit" element={<EditFood/>}/>
   <Route path="/menu" element={<MenuAdmin/>}/>
   <Route path="/new" element={<NewFood/>}/>

  
 </Routes>

)

}
