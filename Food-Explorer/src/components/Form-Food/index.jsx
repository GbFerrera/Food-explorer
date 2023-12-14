import { Component } from "./style";
import { Button } from "../button";
import { IngredientItem } from "../ingredient-Item";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";

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

    await api.post("/foods" , {
     avatar, 
     title,
     category,
     ingredient,
     price,
     description

    })
     
    console.log(handleAddIngredient) 
    alert("Prato criado com sucesso!")
    navigate("/")

  }



  return (
    <Component>
      <section>
        <div className="lineOne">
          <div className="flex">
            <label htmlFor="image">Imagem do prato</label>

            <label htmlFor="image" id="labelUpdate">
              <input 
              id="image" 
              type="file" 
              onChange={e=> setAvatar(e.target.files[0])}
              />
              <img src="src/images/update.svg" alt="" />
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
             <option value="">selecione a categoria</option>
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
