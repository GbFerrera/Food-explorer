import { Container } from "./style";
import { NavBar } from "../../../components/NavBar";
import { Card } from "../../../components/card"
import { Footer } from "../../../components/footer"
import { useState,useEffect } from "react";

import { api } from "../../../services";


export function Home() {

  const [totalAmount, setTotalAmount] = useState(0);

  const handleIncludeAmount = (amount) => {
    setTotalAmount((prevTotal) => prevTotal + amount);
  };


  const [refeicoes, setRefeicoes] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    api.get("/foods")
      .then(response => {
        const foods = response.data;


        const refeicoes = foods.filter(food => food.category === 'Refeições');
        const sobremesas = foods.filter(food => food.category === 'Sobremesas');
        const bebidas = foods.filter(food => food.category === 'Bebidas');

        setRefeicoes(refeicoes);
        setSobremesas(sobremesas);
        setBebidas(bebidas);
      })
      .catch(error => {
        console.error("Erro ao obter dados das comidas:", error);
      });
  }, []);

   return (

      <Container>

         <NavBar totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>

         <main>

            <section>

               <img src="src/images/home/fruits.svg" alt="Frutas decorativas " />


               <div id="text">
                  <h5>Sabores inigualáveis</h5>
                  <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

               </div>

            </section>

            


            <p className="category">Refeições</p>

            <div className="cards">
          {refeicoes.map((food, index) => {
            // Construa a URL completa da imagem
            const avatarUrl = `http://localhost:7777/files/${food.avatar}`;

            return (
              <Card
                key={index}
                img={avatarUrl}
                food={food.title}
                description={food.description}
                price={food.price}
              />
            );
          })}
        </div>

            <p className="category">Sobremesas</p>

            <div className="cards">
          {sobremesas.map((food, index) => {
            // Construa a URL completa da imagem
            const avatarUrl = `http://localhost:7777/files/${food.avatar}`;

            return (
              <Card
                key={index}
                img={avatarUrl}
                food={food.title}
                description={food.description}
                price={food.price}
              />
            );
          })}
        </div>

            <p className="category">Bebidas</p>

            <div className="cards">
          {bebidas.map((food, index) => {
            // Construa a URL completa da imagem
            const avatarUrl = `http://localhost:7777/files/${food.avatar}`;

            return (
              <Card
                key={index}
                img={avatarUrl}
                food={food.title}
                description={food.description}
                price={food.price}
              />
            );
          })}
        </div>



         </main>

         <Footer />




      </Container>
   )




}