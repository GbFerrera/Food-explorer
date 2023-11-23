import { Component } from "./style";



export function FormFood() {



  return(



  <Component>

     <label htmlFor="image">Imagem do prato</label>

     <input id="image" type="file" />
    
    <label htmlFor="name">Nome</label>
    <input id="name" type="text" placeholder="Ex.: Salada Ceasar" />


   <label htmlFor="category">Categoria</label>
   <select name="opçoes" id="category">

    <option value="opcao1">Refeições</option>
    <option value="opcao2">Sobremesas</option>
    <option value="opcao3">Bebidas</option>


   </select>


   <label htmlFor="ingredients">Ingredientes</label>

   <div id="ingredients">

    <button type="button">adicionar +</button>

   </div>


   <label htmlFor="description">Descrição</label>

   <textarea name="descrição" id="description" cols="30" rows="10"
   placeholder="A Salada César é uma opção refrescante para o verão."></textarea>









  </Component>
  




  )





}