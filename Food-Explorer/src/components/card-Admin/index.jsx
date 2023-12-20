import { Component } from "./style";
import { Link } from "react-router-dom";

import { useEffect } from "react";

export function CardAdmin({ id,img, food, description, price }) {
  return (
    <Component>
      <div className="itens">
        <Link to={`/edit/${id}`} className="BgNone" >
          <img
            id="penEdit"
            src="src/images/pen.svg"
            alt="icone de editar comida"
          />
        </Link>

        
        <img id="foodImg" src={img} />
        
        <Link to={`/food/${id}`}>
        <p id="foodName">{food}</p>
        </Link> 
        <p id="descriptionCard">{description}</p>
        <p id="price"> R$ {price} </p>
      </div>
    </Component>
  );
}
