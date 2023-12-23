// Food.js
import { useParams } from "react-router-dom";
import { api } from "../../../services";
import { Container } from "./style";
import { NavBar } from "../../../components/NavBar";
import { Footer } from "../../../components/footer";
import { BtnBack } from "../../../components/button_Back";
import { useState, useEffect } from "react";
import less from "../../../images/card/less.svg";
import more from "../../../images/card/more.svg";
import receipt from "../../../images/navBar/receipt.svg";

export function Food({ onIncludeAmount }) {
  const params = useParams();
  const [foodData, setFoodData] = useState({
    avatar: "",
    title: "",
    description: "",
    price: 0,
    ingredients: [],
  });
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    api.get(`/foods/${params.id}`)
      .then((response) => {
        const { avatar, title, description, price, ingredients } = response.data;
        const avatarUrl = `http://localhost:7777/files/${avatar}`;
        
        const parsedPrice = !isNaN(parseFloat(price)) ? parseFloat(price) : 0;

        setFoodData({
          avatar: avatarUrl,
          title,
          description,
          price: parsedPrice,
          ingredients,
        });
      })
      .catch((error) => {
        console.error("Erro ao obter dados do produto", error);
      });
  }, [params.id]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const calculateTotalPrice = () => {
    return (foodData.price * quantity).toFixed(2);
  };

  const handleIncludeAmount = () => {
    const totalAmount = parseFloat(calculateTotalPrice());
    onIncludeAmount(totalAmount);
  };

  return (
    <Container>
      <NavBar />
      <main>
        <BtnBack />
        <div className="detailsFood">
          <img id="imgFood" src={foodData.avatar} alt="Imagem do prato" />
          <div className="detailsRequest">
            <div className="recipe">
              <h2>{foodData.title}</h2>
              <p id="description">{foodData.description}</p>
              <section>
                {foodData.ingredients.map((ingredient, index) => (
                  <div key={index} id="ingredient">
                    {ingredient}
                  </div>
                ))}
              </section>
            </div>
            <div className="order">
              <div className="quantity">
                <button onClick={handleDecrease}>
                  <img src={less} alt="Diminuir quantidade" />
                </button>
                <span>{String(quantity).padStart(2, "0")}</span>
                <button onClick={handleIncrease}>
                  <img src={more} alt="Aumentar quantidade" />
                </button>
              </div>
              <button id="request" onClick={handleIncludeAmount}>
                <img src={receipt} alt="" />
                Pedir R$ <span>{calculateTotalPrice()}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
