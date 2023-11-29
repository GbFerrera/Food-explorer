import { Component } from "./style";
import {Button } from "../../components/button"


export function AdminNavBar() {


  return(

  <Component>

    <button className="none">
  <img src="src/images/navBar/options.svg" alt="Imagem de opções de menu da Home" />

   </button>

  <div className="title">
       
      <div >
      <img src="src/images/polygon.svg" alt="Logo do app" />
      <h1>food explorer</h1>
     </div>
      <p id="adm">admin</p>
 </div>


   <div className="wrapper" id="headerDetails">

<div id="headerSearch">
   <img src="src/images/search.svg" alt="" />


<input type="text"  placeholder="Busque por pratos ou ingredientes"/>
</div>

<Button id="btnNew" title={"Novo prato"}/>

<button id="LogOut">
  <img src="src/images/navBar/logOut.svg" alt="" />
  
</button>

   </div>
    </Component>
  )
} 