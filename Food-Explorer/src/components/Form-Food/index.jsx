import { Component } from "./style";
import {Button} from "../button"


export function FormFood() {



  return(



  <Component>

    <section>

    <div className="flex"> 
     <label htmlFor="image">Imagem do prato</label>

     <input id="image" type="file" />
     </div>


    <div className="flex">
    <label htmlFor="name">Nome</label>
    <input id="name" type="text" placeholder="Ex.: Salada Ceasar" />
   </div>

   
   <div className="flex"> 
   <label htmlFor="category">Categoria</label>
   <select name="opçoes" id="category">

    <option value="opcao1">Refeições</option>
    <option value="opcao2">Sobremesas</option>
    <option value="opcao3">Bebidas</option>


   </select>
   </div>
   </section>


<section id="rowTwo">
<div className="flex">
   <label htmlFor="ingredients">Ingredientes</label>

   <div id="ingredients">

    <button type="button">adicionar +</button>

   </div>
   </div>

   <div className="flex">

   <label htmlFor="price">Preço</label>

   <input id="price" placeholder="R$ 00,00" type="number" />
   </div>
</section>


   <label htmlFor="description">Descrição</label> 
   <textarea name="descrição" id="description" cols="30" rows="7"
   placeholder="A Salada César é uma opção refrescante para o verão."></textarea>
   
   <Button className= "btn" title={"Salvar alterações"}/>







  </Component>
  




  )





}