import { api } from "../../../services";

import { Container } from "./style";
import { AdminNavBar } from "../../../components/NavBar-Admin";
import { Footer } from "../../../components/footer";
import { Button } from "../../../components/button";
import { BtnBack } from "../../../components/button_Back";

import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export function AdminFood() {
  const navigate = useNavigate()
  const params = useParams()
  const [foodData, setFoodData] = useState({
    id: '',
    avatar: '',
    title: '',
    description: '',
    ingredients: [],
  });

  

  function editNavigate(){
    navigate(`/edit/${params.id}`)
    
  }

  useEffect(() => {

   api.get(`/foods/${params.id}`)
   .then(response => {

    const {id,avatar,title,description,ingredients} = response.data

    const avatarUrl = `http://localhost:7777/files/${avatar}`;
    setFoodData( {
      id,
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
      <AdminNavBar />

      <main>
        <BtnBack />

        <div className="detailsFood">
          <img
            id="imgFood"
            src={foodData.avatar}
            alt="imagem do prato"
          />

          <div className="detailsRequest">
            <div className="recipe">
              <h2>{foodData.title}</h2>

              <p id="description">
              {foodData.description}
              </p>

              <section>
                {foodData.ingredients.map((ingredient, index) => (
                  <div key={index} id="ingredient">{ingredient}</div>
                ))}
              </section>
            </div>
          
           
            <Button 
            id="editBtn" 
            title="Editar Prato"
            onClick={editNavigate}
            />
              
                   
            
            
          </div>
        </div>
      </main>

      <Footer />
    </Container>
  );
}
