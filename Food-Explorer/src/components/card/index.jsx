import { Component } from "./style";
import { Button } from "../button";


export function Card({img,food,price}) {

return(

 <Component>

<div className="itens">

<img id="favorite" src="src/images/card/Favorite.svg" alt="icone de favoritar comida" />

<img src={img} />

<p>{food}</p>

<p id="price"> R$ {price} </p>


<div>

    <button>
    
    <img src="src/images/card/less.svg" alt="" />

    </button>

    <p> 01 </p>

    <button>
    
    <img src="src/images/card/more.svg" alt="" />

    </button>


</div>

</div>


<Button title= "incluir"/>




  

 </Component>





)





}