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

    <img src="src/images/home/fruits.svg" alt="Frutas decorativas " />
    <img src="src/images/home/fruits.svg" alt="Frutas decorativas " />


   <div id="text">
    <h5>Sabores inigualáveis</h5>
    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

</div>

   </section>




 <p className="category">Refeições</p>

  <div className="cards">

  

  <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>



   
 </div>

 <p className="category">Sobremesas</p>

<div className="cards">


<Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>

   

</div>

<p className="category">Bebidas</p>

<div className="cards">


   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>
   <Card img="src/images/card/foods/salada.svg" food= "Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"}/>

   
</div>



</main>

<Footer/>




</Container>
)




}