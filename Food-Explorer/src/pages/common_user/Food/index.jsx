import { Container } from "./style";
import { NavBar } from "../../../components/NavBar";
import { Footer } from "../../../components/footer";

export function Food() {


return(

<Container>

<NavBar/>

<main>

<button id="btnBack">

  <img src="src/images/navBar/btnBack.svg" alt="" />
  voltar
</button>


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


  <div className="order">

   <div className="quantity">

     <button>

   <img src="src/images/card/less.svg" alt="diminuir quantidade" />

    </button>

     <span>01</span>

     <button>

     <img src="src/images/card/more.svg" alt="Aumentar quantidade" />

     </button>
   </div>
    
  <button id="request">

  <img src="src/images/navBar/receipt.svg" alt="" />


  pedir. R$ <span>25,00</span>

  </button>

  </div>
  </div>
</div>

  

</main>




<Footer/>


</Container>





)





}