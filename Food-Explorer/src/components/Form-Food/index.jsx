import { Component } from "./style";
import { Button } from "../button";
import { IngredientItem } from "../ingredient-Item";

export function FormFood() {
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
              <option value="opcao1">Refeições</option>
              <option value="opcao2">Sobremesas</option>
              <option value="opcao3">Bebidas</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <div className="lineTwo">
          <div id="widhtIngredient" className="flex">
            <label htmlFor="ingredients">Ingredientes</label>

            <div id="ingredients">

            <IngredientItem value="Pão" />
            <IngredientItem isNew placeholder="Adicionar" />
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

      <div id="btnSave">
        <Button className="btn" title={"Salvar alterações"} />
      </div>
    </Component>
  );
}
