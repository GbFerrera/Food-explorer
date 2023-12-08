import { Container } from "./style";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { Link } from "react-router-dom";



export function SingUp() {

 return(

 <Container>

   <header>
    <img src="src/images/polygon.svg" alt="logo" />
    <h1>food explorer</h1>

   </header>

<main>

 <h2>Crie sua conta</h2>

 <form action="">

   <Input id="name" label= "Seu nome" placeholder= "Exemplo: Maria da Silva"/>

   <Input id="email" label= "Email" placeholder= "Exemplo: exemplo@exemplo.com.br"/>
   <Input id="senha" label= "Senha" placeholder= "No mínimo 6 caracteres"/>

   <Button title= "Entrar" />

   </form>

   <Link to={"/"}>Já tenho uma conta</Link>

</main>
 </Container>

 )





}