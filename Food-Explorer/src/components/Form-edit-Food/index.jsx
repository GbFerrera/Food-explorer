import { Component } from "./style";
import { Button } from "../button";
import { IngredientItem } from "../ingredient-Item";

import { useState } from "react";


export function FormEditFood() {
  const [ingredient, setIngredient] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
    setIngredient((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredient((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  return (
    <Component>
      <section>
        <div className="lineOne">
          <div className="flex">
            <label htmlFor="image">Imagem do prato</label>

            <label htmlFor="image" id="labelUpdate">
              <input id="image" type="file" />
              <img src="src/images/update.svg" alt="" />
              Selecione imagem
            </label>
          </div>

          <div className="nameWidht">
            <div className="flex">
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" placeholder="Ex.: Salada Ceasar" />
            </div>
          </div>

          <div className="flex">
            <label htmlFor="category">Categoria</label>
            <select name="opçoes" id="category">
            <option value="Refeições">Selecione a categoria</option>
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

            <input id="price" placeholder="R$ 00,00" type="number" />
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
      ></textarea>

      <div id="Buttons">
        <Button title={"Excluir prato"} />
        <Button className="btn" title={"Salvar alterações"} />
      </div>
    </Component>
  );
}
