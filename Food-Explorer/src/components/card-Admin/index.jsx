import { Component } from "./style";
import { Button } from "../button";


export function CardAdmin({img,food,description,price}) {

return(

 <Component>

  <div className="itens">
 <button className="BgNone" id="favorite">
<img id="penEdit" src="src/images/pen.svg" alt="icone de editar comida" />
</button>
<img id="foodImg" src={img} />

<p id="foodName">{food}</p>
<p id="descriptionCard">{description}</p>
<p id="price"> R$ {price} </p>



</div>







  

 </Component>





)





}