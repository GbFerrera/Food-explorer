import { api } from "../../../services";

import { Container } from "./style";
import { NavBar } from "../../../components/NavBar";
import { Footer } from "../../../components/footer";
import {BtnBack} from "../../../components/button_Back"

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import less from "../../../images/card/less.svg"
import more from "../../../images/card/more.svg"
import receipt from "../../../images/navBar/receipt.svg"

export function Food() {

  const params = useParams()
  const [foodData, setFoodData] = useState({
    avatar: '',
    title: '',
    description: '',
    ingredients: [],
  });

  

  useEffect(() => {

   api.get(`/foods/${params.id}`)
   .then(response => {

    const {avatar,title,description,ingredients} = response.data

    const avatarUrl = `http://localhost:7777/files/${avatar}`;
    setFoodData( {
      avatar:avatarUrl,
      title,
      description,
      ingredients})

   }).catch(error =>  {
    console.error("erro ao obter dados do produto", error)
   })

    
  },[params.id])




  return (
    <Container>
      <NavBar />

      <main>
       <BtnBack/>

        <div className="detailsFood">
          <img
            id="imgFood"
            src={foodData.avatar}
            alt="imagem do prato"
          />

          <div className="detailsRequest">
            <div className="recipe">
              <h2>Salada Ravanello</h2>

              <p id="description">
                {foodData.description}
              </p>

              <section>
             
                {foodData.ingredients.map((ingredient, index) => (
                  <div key={index} id="ingredient">{ingredient}</div>
                ))}
             
              </section>
            </div>

            <div className="order">
              <div className="quantity">
                <button>
                  <img
                    src={less}
                    alt="diminuir quantidade"
                  />
                </button>

                <span>01</span>

                <button>
                  <img
                    src={more}
                    alt="Aumentar quantidade"
                  />
                </button>
              </div>

              <button id="request">
                <img src= {receipt} alt="" />
                pedir R$ <span>25,00</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Container>
  );
}
