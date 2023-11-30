import { Container } from "./style";
import { Input } from "../../../components/input";
import { Footer } from "../../../components/footer";

export function MenuAdmin() {

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

 <section>

  <button type="submit">Novo prato</button>
  <button type="submit">Sair</button>
  
</section>
</main>


<Footer/>





</Container>






)





}