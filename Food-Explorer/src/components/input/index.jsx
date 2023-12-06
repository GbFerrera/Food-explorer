import { Component } from "./style";



export function Input({ id, label, title , ...rest}) {


return(

 
   <Component >

  <div>
    <label htmlFor={id}>{label}</label>
  
     <input id={id} {...rest} />
</div>
   </Component>



)






}