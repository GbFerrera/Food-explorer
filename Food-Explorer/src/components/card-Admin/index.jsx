import { Component } from "./style";
import { Link } from "react-router-dom";

export function CardAdmin({ img, food, description, price }) {
  return (
    <Component>
      <div className="itens">
        <Link to={"/new"} className="BgNone" >
          <img
            id="penEdit"
            src="src/images/pen.svg"
            alt="icone de editar comida"
          />
        </Link>
        <img id="foodImg" src={img} />

        <p id="foodName">{food}</p>
        <p id="descriptionCard">{description}</p>
        <p id="price"> R$ {price} </p>
      </div>
    </Component>
  );
}
