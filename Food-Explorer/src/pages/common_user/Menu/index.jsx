import {useAuth} from "../../../hooks/auth"

import { Container } from "./style";
import { Input } from "../../../components/input";
import { Footer } from "../../../components/footer";
import { Link } from "react-router-dom";

import search from "../../../images/navBar/search.svg"

export function Menu() {

 const {singOut} = useAuth()

  return (
    <Container>
      <header>
        <Link to={"/"}>
          <img src="src/images/close.svg" alt="Imagem para fechar Menu" />
        </Link>

        <p>Menu</p>
      </header>

      <main>
        <div className="search">
          <button>
            <img src={search} alt="Imagem de lupa de pesquisa" />
          </button>

          <Input placeholder="Busque por pratos ou ingredientes" />
        </div>

        <button onClick={singOut}>Sair</button>
      </main>

      <Footer />
    </Container>
  );
}
