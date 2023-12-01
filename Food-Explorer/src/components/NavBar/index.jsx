import { Component } from "./style";
import { Input } from "../input";
import { Button } from "../button";

export function NavBar() {


  return (

    <Component>

   <img className="wrapper" src="src/images/navBar/options.svg" alt="Imagem de opções de menu da Home" />

    <div className="title">
      <div>
       <img src="src/images/polygon.svg" alt="Logo do app" />
       <h1>food explorer</h1>
    </div>
       <div className="none" id="search">

          <button >

              <img src="src/images/search.svg" alt="Imagem de lupa de pesquisa" />

          </button>

  <Input placeholder= "Busque por pratos ou ingredientes"/>

       </div>

       <button className="none" id="BtnNav">
   
        <img src="src/images/navBar/receipt.svg" alt="" />   

         pedidos  
       

       </button>

       <img  className="none" src="src/images/navBar/logOut.svg" alt="" />

       <button id="LogOut">
       <img src="src/images/navBar/logOut.svg" alt="" />
  
       </button>


    </div>


    <img className="wrapper" src="src/images/navBar/receipt.svg" alt="Recibo de pedidos" />

    <span className="wrapper">0</span>

  
</Component>
)

}