import { Container } from "./style";
import { NavBar } from "../../../components/NavBar";
import{Card} from "../../../components/card"
import {Footer} from "../../../components/footer"


export function Home(){

return(

  <Container>



   <NavBar/>

<main> 

   <section>

    <img src="src/images/home/fruits.png" alt="Frutas decorativas " />

   <div>
    <h5>Sabores inigualáveis</h5>
    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

</div>

   </section>




 <p className="title">Refeições</p>

  <div className="cards">


   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>


 </div>

 <p className="title">Sobremesas</p>

<div className="cards">


 <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
 <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
 <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
 <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>


</div>

<p className="title">Bebidas</p>

<div className="cards">


 <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
 <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
 <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
 <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
 <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>
 <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" price={"49,97"}/>


</div>



</main>

<Footer/>




</Container>
)




}