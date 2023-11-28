import { AdminNavBar } from "../../../components/NavBar-Admin";
import { FormFood } from "../../../components/Form-Food";
import { Footer } from "../../../components/footer";
import { Container } from "./style";


export function NewFood() {

return(

  <Container>

    <AdminNavBar/>

<div className="new">
    <button> voltar </button>
    <h1>Novo Prato</h1>
</div>
     <FormFood/>



     <Footer/>
 
  </Container>





)





}