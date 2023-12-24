import { useState } from "react";

import { Container } from "./style";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../images/polygon.svg"

import {api} from "../../../services"

export function SingUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSingUp(){
   if(!name || !email || !password){

   return alert("Preencha todos os campos !")

   }
 
    api.post("/users", {name, email, password})
    .then( () => {

      alert("Usuario cadastrado com sucesso")
      navigate("/")
    })
    .catch(error =>{
      if(error.response){

        alert(error.response.data.message)

      }else{
        alert("Não foi possivel cadastrar")
      }
    })

  }

  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
        <h1>food explorer</h1>
      </header>

      <main>
        <h2>Crie sua conta</h2>

        <form action="">
          <Input
            id="name"
            label="Seu nome"
            placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}
          />

          <Input
            id="email"
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            type="password"
            id="senha"
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />

          <Button type="button" title="Entrar" onClick={handleSingUp} />
        </form>

        <Link to={"/"}>Já tenho uma conta</Link>
      </main>
    </Container>
  );
}
