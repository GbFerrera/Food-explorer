import { Component } from "./style";
import { Button } from "../button";


export function Card({img,food,price}) {

return(

 <Component>

  <div className="itens">
 <button className="BgNone" id="favorite">
<img src="src/images/card/Favorite.svg" alt="icone de favoritar comida" />
</button>
<img id="foodImg" src={img} />

<p id="foodName">{food}</p>

<p id="price"> R$ {price} </p>


<div className="hideInclud">

 <div className="flex">
    
<div id="amountCard">

<button className="BgNone">

<img src="src/images/card/less.svg" alt="" />

</button>

<p> 01 </p>

<button className="BgNone">

<img src="src/images/card/more.svg" alt="" />

</button>


</div>

<Button id="include" title= "incluir"/>


</div>


</div>

 <div className="wrapperInclud">

 <div id="amountCard">

<button className="BgNone">

<img src="src/images/card/less.svg" alt="" />

</button>

<p> 01 </p>

<button className="BgNone">

<img src="src/images/card/more.svg" alt="" />

</button>


</div>

<Button id="include" title= "incluir"/>


 </div>

</div>







  

 </Component>





)





}