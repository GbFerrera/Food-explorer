// NavBar.js
import { useAuth } from "../../hooks/auth";
import { Component } from "./style";
import { Input } from "../input";
import { Link } from "react-router-dom";
import search from "../../images/navBar/search.svg";
import logo from "../../images/polygon.svg";
import receipt from "../../images/navBar/receipt.svg";
import logOut from "../../images/navBar/logOut.svg";
import options from "../../images/navBar/options.svg";
import { useState, useEffect } from "react";
import { api } from "../../services";

export function NavBar({ totalAmount, setTotalAmount, onSearch }) {
  const { singOut } = useAuth();

  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      if (searchItem.trim() === "") {
        setSearchResults({
          refeicoes: [],
          sobremesas: [],
          bebidas: [],
        });
        return;
      }

      const response = await api.get(`/foods?term=${searchItem}`);
      setSearchResults({
        refeicoes: response.data.filter((food) => food.category === "Refeições"),
        sobremesas: response.data.filter((food) => food.category === "Sobremesas"),
        bebidas: response.data.filter((food) => food.category === "Bebidas"),
      });

      onSearch(searchItem);
    } catch (error) {
      console.error("Erro ao realizar a pesquisa:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchItem]);

  return (
    <Component>
      <div className="mobile">
        <Link to={"/menu"}>
          <img src={options} alt="Imagem de opções de menu da Home" />
        </Link>

        <Link to={"/"}>
          <div className="title">
            <img src={logo} alt="Logo do app" />
            <h1>food explorer</h1>
          </div>
        </Link>

        <button>
          <img src={receipt} alt="Recibo de pedidos" />
        </button>
        <span>{totalAmount}</span>
      </div>

      <div className="desktop">
        <Link to={"/"}>
          <div className="title">
            <img src={logo} alt="Logo do app" />
            <h1>food explorer</h1>
          </div>
        </Link>

        <div id="search">
          <div className="itensSearch">
            <img src={search} alt="Imagem de lupa de pesquisa" />
            <Input
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
        </div>
        <button id="requests">
          <img src={receipt} alt="Recibo de pedidos" />
          <p>
            Pedidos (<span>{totalAmount}</span>)
          </p>
        </button>

        <Link to="/" onClick={singOut} id="LogOut">
          <img src={logOut} alt="" />
        </Link>
      </div>
    </Component>
  );
}
