import { AdminNavBar } from "../../../components/NavBar-Admin";
import { FormFood } from "../../../components/Form-Food";
import { Footer } from "../../../components/footer";
import { Container } from "./style";


export function NewFood() {

return(

  <Container>

    <button> voltar </button>
    <h1>Editar Prato</h1>

    <AdminNavBar/>


     <FormFood/>



     <Footer/>
 
  </Container>





)





}