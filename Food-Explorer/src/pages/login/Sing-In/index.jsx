import { Container } from "./style";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";



export function SingIn() {

 return(

 <Container>

   <header>
    <img src="src/images/polygon.svg" alt="logo" />
    <h1>food explorer</h1>

   </header>

<main>

 <h2>Faça login</h2>

 <form action="">
  
   <Input id="email" label= "Email" placeholder= "Exemplo: exemplo@exemplo.com.br"/>
   <Input id="senha" label= "Senha" placeholder= "No mínimo 6 caracteres"/>

   <Button title= "Entrar" />

   </form>

   <a href="#">Criar uma conta</a>

</main>
 </Container>

 )





}