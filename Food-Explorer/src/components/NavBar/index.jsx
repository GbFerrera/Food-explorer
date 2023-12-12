import {useAuth} from "../../hooks/auth"

import { Component } from "./style";
import { Input } from "../input";
import { Button } from "../button";
import { Link } from "react-router-dom";

export function NavBar() {
const {singOut} = useAuth()


  return (
    <Component>
      <div className="mobile">

        <Link to={"/menu"}>
        <img
          src="src/images/navBar/options.svg"
          alt="Imagem de opções de menu da Home"
        />
    </Link>
        <div className="title">
          <img src="src/images/polygon.svg" alt="Logo do app" />
          <h1>food explorer</h1>
        </div>

      <button>
        <img src="src/images/navBar/receipt.svg" alt="Recibo de pedidos" />
    </button>
        <span>0</span>
      </div>

      <div className="desktop">

      <div className="title">
          <img src="src/images/polygon.svg" alt="Logo do app" />
          <h1>food explorer</h1>
        </div>
        

        <div id="search">
          <div className="itensSearch">
          
            <img src="src/images/search.svg" alt="Imagem de lupa de pesquisa" />
          

          <Input placeholder="Busque por pratos ou ingredientes" />
        </div>
   </div>
      <button id="requests">
        <img src="src/images/navBar/receipt.svg" alt="Recibo de pedidos" />
    
        <p>Pedidos (<span>1</span>)</p>

      </button>

       <button id="LogOut" onClick={singOut}>
          <img src="src/images/navBar/logOut.svg" alt="" />
        </button>

      </div>
    </Component>
  );
}
