import { useState } from "react";

import { Container } from "./style";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { Link } from "react-router-dom"

import { useAuth } from "../../../hooks/auth"

import logo from "../../../images/polygon.svg"


export function SingIn() {

  const [email,setEmail] = useState("")
  const [password,setPasword] = useState("")

   const { signIn } = useAuth()

  function handleSingnIn(){
  
    signIn({email,password})
  }

  return (

    <Container>

      <header>
        <img src={logo} alt="logo" />
        <h1>food explorer</h1>

      </header>

      <main>

        <h2>Faça login</h2>

        <form>

          <Input
            id="email"
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            onChange={ e => setEmail(e.target.value)}
            />
           

          <Input
            type="password"
            id="senha"
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            onChange={ e => setPasword(e.target.value)} 
            />

          <Button type="button" title="Entrar" onClick={handleSingnIn}/>

        </form>

        <Link to="/register">
          Criar uma conta
        </Link>

      </main>
    </Container>

  )





}