import { Container } from "./style";
import { Input } from "../../../components/input";
import { Footer } from "../../../components/footer";
import {Link} from "react-router-dom"

export function MenuAdmin() {
  return (
    <Container>
      <header>
        <button>
          <img src="src/images/close.svg" alt="Imagem para fechar Menu" />
        </button>

        <p>Menu</p>
      </header>

      <main>
        <div className="search">
          
            <img src="src/images/search.svg" alt="Imagem de lupa de pesquisa" />
          

          <Input placeholder="Busque por pratos ou ingredientes" />
        </div>

        <section>
          <Link to="/new" >Novo prato</Link>
          <Link >Sair</Link>
        </section>
      </main>

      <Footer />
    </Container>
  );
}
