import { AdminNavBar } from "../../../components/NavBar-Admin";
import { FormEditFood } from "../../../components/Form-edit-Food";
import { Footer } from "../../../components/footer";
import { Container } from "./style";
import { BtnBack } from "../../../components/button_Back";

export function EditFood() {
  return (
    <Container>
      <AdminNavBar />

      <div className="new">
        <BtnBack />
        <h1>Novo Prato</h1>
      </div>
      <FormEditFood />

      <Footer />
    </Container>
  );
}
