import { Container } from "./style";
import { AdminNavBar } from "../../../components/NavBar-Admin";
import { CardAdmin } from "../../../components/card-Admin";
import { Footer } from "../../../components/footer";

export function HomeAdmin() {
  return (
    <Container>
      <AdminNavBar />  

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
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
        </div>

        <p className="category">Sobremesas</p>

        <div className="cards">
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
        </div>

        <p className="category">Bebidas</p>

        <div className="cards">
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
          <CardAdmin
            img="src/images/card/foods/salada.svg"
            food="Salada Ravanello >"
            description="A melhorzinha que ta tendo bb"
            price={"49,97"}
          />
        </div>
      </main>

      <Footer />
    </Container>
  );
}
