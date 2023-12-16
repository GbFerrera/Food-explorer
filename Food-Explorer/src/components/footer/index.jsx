import { Component } from "./style";
import footerLogo from "../../images/polygon-Footer.svg";

export function Footer() {
  return (
    <Component>
      <div>
        <img src={footerLogo} alt="Imagem do poligono do footer" />
        <p>food explorer</p>
      </div>

      <a href="#">© 2023 - Todos os direitos reservados.</a>
    </Component>
  );
}
