import { Component } from "./style";
import { Button } from "../../components/button";

import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function AdminNavBar() {

  const navigate = useNavigate()

  function navigateNew(){
    navigate("/new")
  }
  const { singOut } = useAuth();
  return (
    <Component>
      <Link to="/menu" id="btnOptions">
        <img
          src="src/images/navBar/options.svg"
          alt="Imagem de opções de menu da Home"
        />
      </Link>

      <div className="title">
        <div id="titleMobile">
          <img src="src/images/polygon.svg" alt="Logo do app" />
          <h1>food explorer</h1>
        </div>
        <p id="adm">admin</p>
      </div>

      <div className="wrapper" id="headerDetails">
        <div id="headerSearch">
          <div className="searchItens">
            <img src="src/images/search.svg" alt="" />

            <input
              type="text"
              placeholder="Busque por pratos ou ingredientes"
            />
          </div>
        </div>
        <Button
         id="btnNew" 
         title={"Novo prato"} 
         onClick={navigateNew}
         />

        <button id="LogOut" onClick={singOut}>
          <img src="src/images/navBar/logOut.svg" alt="" />
        </button>
      </div>
    </Component>
  );
}
