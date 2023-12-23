import { Component } from "./style";
import { Button } from "../../components/button";

import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../../images/polygon.svg"
import logOut from "../../images/navBar/logOut.svg"
import search from "../../images/navBar/search.svg"
import options from "../../images/navBar/options.svg"

import { useState, useEffect } from "react";
import { api } from "../../services";


export function AdminNavBar({ onSearch }) {

  const navigate = useNavigate()

  function navigateNew(){
    navigate("/new")
  }
  const { singOut } = useAuth();

  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await api.get(`/foods?term=${searchItem}`);
      setSearchResults(response.data);

      onSearch(searchItem)
    } catch (error) {
      console.error("Erro ao realizar a pesquisa:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchItem]);




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
              onChange={e => setSearchItem(e.target.value)}
            />
          </div>
        </div>
        <Button
         id="btnNew" 
         title={"Novo prato"} 
         onClick={navigateNew}
         />

        <Link to="/" id="LogOut">
          <img src={logOut} alt="" onClick={singOut} />
        </Link>
      </div>
    </Component>
  );
}
