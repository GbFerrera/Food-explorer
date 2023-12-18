import { Component } from "./style";
import { Button } from "../../components/button";

import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../../images/polygon.svg"
import logOut from "../../images/navBar/logOut.svg"
import search from "../../images/navBar/search.svg"
import options from "../../images/navBar/options.svg"


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
          src= {options}
          alt="Imagem de opções de menu da Home"
        />
      </Link>

      <div className="title">
        <Link to={"/"}>
        <div id="titleMobile">
          <img src= {logo} alt="Logo do app" />
          <h1>food explorer</h1>
        </div>
        </Link>
        <p id="adm">admin</p>
      </div>

      <div className="wrapper" id="headerDetails">
        <div id="headerSearch">
          <div className="searchItens">
            <img src={search} alt="" />

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
          <img src={logOut} alt="" />
        </button>
      </div>
    </Component>
  );
}
