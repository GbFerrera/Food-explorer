import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import { Component } from "./style";
import { Input } from "../input";
import { Button } from "../button";
import { Link } from "react-router-dom";

import search from "../../images/navBar/search.svg";
import logo from "../../images/polygon.svg"
import receipt from "../../images/navBar/receipt.svg"
import logOut from "../../images/navBar/logOut.svg"

export function NavBar({ totalAmount, setTotalAmount }) {
  const { singOut } = useAuth();

  return (
    <Component>
      <div className="mobile">
        <Link to={"/menu"}>
          <img
            src="src/images/navBar/options.svg"
            alt="Imagem de opções de menu da Home"
          />
        </Link>

        <Link to={"/"}>
          <div className="title">
            <img src={logo} alt="Logo do app" />
            <h1>food explorer</h1>
          </div>
        </Link>

        <button>
          <img src= {receipt} alt="Recibo de pedidos" />
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

            <Input placeholder="Busque por pratos ou ingredientes" />
          </div>
        </div>
        <button id="requests">
          <img src={receipt} alt="Recibo de pedidos" />

          <p>
            Pedidos (<span>{totalAmount}</span>)
          </p>
        </button>

        <button id="LogOut" onClick={singOut}>
          <img src={logOut} alt="" />
        </button>
      </div>
    </Component>
  );
}
