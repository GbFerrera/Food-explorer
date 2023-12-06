import { Container } from "./style";
import { AdminNavBar } from "../../../components/NavBar-Admin";
import { Footer } from "../../../components/footer";
import { Button } from "../../../components/button";
import { BtnBack } from "../../../components/button_Back";

export function AdminFood() {


return(

<Container>

<AdminNavBar/>

<main>

<BtnBack/>


 <div className="detailsFood">

 <img id="imgFood" src="src/images/card/foods/salada.svg" alt="imagem do prato" />

 <div className="detailsRequest">

<div className="recipe">
  
  <h2>Salada Ravanello</h2>

  <p id="description">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
   O pão naan dá um toque especial.</p>

  <section>

<div className="rowOne">
    <div id="ingredient">alface</div>
    <div id="ingredient">alface</div>
    <div id="ingredient">alface</div>

    </div>

    <div className="rowTwo">
    <div id="ingredient">alface</div>
    <div id="ingredient">gengibre</div>
    <div id="ingredient">alface</div>


    </div>


  </section>
  </div>

  <Button id="editBtn" title= "Editar Prato"/>
 
  </div>
</div>

  

</main>




<Footer/>


</Container>





)





}