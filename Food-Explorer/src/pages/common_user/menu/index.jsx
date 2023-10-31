import { Container } from "./style";
import { Input } from "../../../components/input";
import { Footer } from "../../../components/footer";

export function Menu() {

return(

<Container>


  <header> 
   <button>
  <img src="src/images/close.svg" alt="Imagem para fechar Menu" />
    </button>

  <p>Menu</p>
  </header>

<main>
 <div className="search">

  <button>

  <img src="src/images/search.svg" alt="Imagem de lupa de pesquisa" />
 </button>

   <Input placeholder= "Busque por pratos ou ingredientes"/>

 </div>

  <button type="submit">Sair</button>

</main>


<Footer/>
 
 



</Container>





  
)





}