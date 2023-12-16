import { Component } from "./style";
import { Button } from "../button";
import { IngredientItem } from "../ingredient-Item";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";

import update from "../../images/update.svg"

export function FormFood() {

   const[title,setTitle] = useState("")
   const[description,setDescription] = useState("")
   const[price,setPrice] = useState("")
   const[category,setCategory] = useState("")
   
   const [avatar, setAvatar] = useState(null);



  const [ingredient, setIngredient] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredient((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredient((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }


  async function handleNewFood(){

    if(!avatar) {
      return alert("Você não inseriu a imagem do prato")
    }

    if(!title) {
      return alert("Você não inseriu o titulo do prato")
    }
    if(!category) {
      return alert("Você não inseriu a categoria do prato")
    }

    if(ingredient.length < 1) {
      return alert("Você precisa pelo menos inserir um ingrediente")
    }

    if(!price) {
      return alert("Você não inseriu o valor do prato")
    }

    if(!description) {
      return alert("Você não inseriu a descrição do prato")
    }

   const formData = new FormData()

   formData.append("avatar",avatar)
   formData.append("title", title)
   formData.append("description", description)
   formData.append("category", category)
   formData.append("price", price)

   const ingredientsArray = Array.isArray(ingredient) ? ingredient : [ingredient];

   ingredientsArray.forEach((ingredientItem, index) => {
    formData.append(`ingredient[${index}]`, ingredientItem);
  });
   


   await api.post("/foods", formData)
   .then(alert("Criado com sucesso"), navigate("/"))
   .catch(error => {
    if(error.response){
      alert(error.response.data.message)
    }else{

      alert("Erro ao criar o prato")
    }


   }

)

  }

  



  return (
    <Component encType="multipart/form-data">
      <section>
        <div className="lineOne">
          <div className="flex">
            <label htmlFor="image">Imagem do prato</label>

            <label htmlFor="image" id="labelUpdate">
              <input 
              id="image" 
              type="file" 
              name="avatar"
              accept="image/*"
              onChange={e => setAvatar(e.target.files[0])}
              />
              <img src={update} alt="" />
              Selecione imagem
            </label>
          </div>

          <div className="nameWidht">
            <div className="flex">
              <label htmlFor="name">Nome</label>
              <input 
              id="name" 
              type="text" 
              placeholder="Ex.: Salada Ceasar" 
              onChange={e => setTitle(e.target.value)}
              />

            </div>
          </div>

          <div className="flex">
            <label htmlFor="category">Categoria</label>
            <select name="opçoes" id="category" onChange={e => setCategory(e.target.value)}>
             <option value="">Selecione a categoria</option>
              <option value="Refeições">Refeições</option>
              <option value="Sobremesas">Sobremesas</option>
              <option value="Bebidas">Bebidas</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <div className="lineTwo">
          <div id="widhtIngredient" className="flex">
            <label htmlFor="ingredients">Ingredientes</label>

            <div id="ingredients">
              {ingredient.map((ingredient, index) => (
                <IngredientItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
              <IngredientItem
                isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </div>

          <div className="flex">
            <label htmlFor="price">Preço</label>

            <input 
            id="price" 
            placeholder="R$ 00,00" 
            type="text" 
            onChange={e => setPrice(e.target.value)}
            />
            
          </div>
        </div>
      </section>

      <label htmlFor="description">Descrição</label>
      <textarea
        name="descrição"
        id="description"
        cols="30"
        rows="7"
        placeholder="A Salada César é uma opção refrescante para o verão."
        onChange={e => setDescription(e.target.value)}
        />

      <div id="btnSave">
        <Button 
        onClick={handleNewFood} 
        className="btn"
         title={"Salvar alterações"} 
         type= "button"
         />
      </div>
    </Component>
  );
}
