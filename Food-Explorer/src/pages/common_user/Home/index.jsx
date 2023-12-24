import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container } from "./style";
import { NavBar } from "../../../components/NavBar";
import { Card } from "../../../components/card";
import { Footer } from "../../../components/footer";
import { useState, useEffect } from "react";

import { api } from "../../../services";

import arrowRight from "../../../images/card/right-arrow.svg";
import arrowLeft from "../../../images/card/left-arrow.svg";
import fruits from "../../../images/home/fruits.svg"

const CustomPrevArrow = (props) => (
  <div {...props} style={{ ...slickArrowStyles, left: "-20px" }}>
    <img src={arrowLeft} alt="Seta para a esquerda" />
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} style={{ ...slickArrowStyles, right: "-20px" }}>
    <img src={arrowRight} alt="Seta para a direita" />
  </div>
);

const slickArrowStyles = {
  fontSize: 0,
  lineHeight: 0,
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  width: "20px",
  height: "20px",
  cursor: "pointer",
  opacity: 0.75,
  zIndex: 1,
};

export function Home() {
  const [totalAmount, setTotalAmount] = useState(0);

  const handleIncludeAmount = (amount) => {
    setTotalAmount((prevTotal) => prevTotal + amount);
  };

  const [refeicoes, setRefeicoes] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    api
      .get("/foods")
      .then((response) => {
        const foods = response.data;

        const refeicoes = foods.filter((food) => food.category === "Refeições");
        const sobremesas = foods.filter(
          (food) => food.category === "Sobremesas"
        );
        const bebidas = foods.filter((food) => food.category === "Bebidas");

        setRefeicoes(refeicoes);
        setSobremesas(sobremesas);
        setBebidas(bebidas);
      })
      .catch((error) => {
        console.error("Erro ao obter dados das comidas:", error);
      });
  }, []);

  useEffect(() => {
    const filteredRefeicoes = refeicoes.filter((food) =>
      food.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredSobremesas = sobremesas.filter((food) =>
      food.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredBebidas = bebidas.filter((food) =>
      food.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults((prevState) => ({
      ...prevState,
      refeicoes: filteredRefeicoes,
      sobremesas: filteredSobremesas,
      bebidas: filteredBebidas,
    }));
  }, [searchTerm, refeicoes, sobremesas, bebidas]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Container>
      <NavBar
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        onSearch={handleSearch}
      />

      <main>
        <section>
          <img src={fruits} alt="Frutas decorativas " />

          <div id="text">
            <h5>Sabores inigualáveis</h5>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </section>

        <p className="category">Refeições</p>

        {windowWidth >= 1080 ? (
          <Slider {...sliderSettings}>
            {searchResults.refeicoes &&
              searchResults.refeicoes.map((food, index) => (
                <Card
                  key={food.id}
                  img={`https://api-food-explorer-k28p.onrender.com/files/${food.avatar}`}
                  id={food.id}
                  food={food.title}
                  description={food.description}
                  price={food.price}
                  onIncludeAmount={handleIncludeAmount}
                />
              ))}
            {searchResults.refeicoes &&
              searchResults.refeicoes.length < sliderSettings.slidesToShow &&
              Array.from({
                length:
                  sliderSettings.slidesToShow - searchResults.refeicoes.length,
              }).map((_, index) => <div key={`empty-${index}`} />)}
          </Slider>
        ) : (
          <div className="cards">
            {searchResults.refeicoes &&
              searchResults.refeicoes.map((food, index) => (
                <Card
                  key={food.id}
                  img={`https://api-food-explorer-k28p.onrender.com/files/${food.avatar}`}
                  id={food.id}
                  food={food.title}
                  description={food.description}
                  price={food.price}
                  onIncludeAmount={handleIncludeAmount}
                />
              ))}
            {searchResults.refeicoes &&
              searchResults.refeicoes.length < sliderSettings.slidesToShow &&
              Array.from({
                length:
                  sliderSettings.slidesToShow - searchResults.refeicoes.length,
              }).map((_, index) => <div key={`empty-${index}`} />)}
          </div>
        )}

        <p className="category">Sobremesas</p>
        {windowWidth >= 1080 ? (
          <Slider {...sliderSettings}>
            {searchResults.sobremesas &&
              searchResults.sobremesas.map((food, index) => (
                <Card
                  key={food.id}
                  img={`https://api-food-explorer-k28p.onrender.com/files/${food.avatar}`}
                  id={food.id}
                  food={food.title}
                  description={food.description}
                  price={food.price}
                  onIncludeAmount={handleIncludeAmount}
                />
              ))}
            {searchResults.sobremesas &&
              searchResults.sobremesas.length < sliderSettings.slidesToShow &&
              Array.from({
                length:
                  sliderSettings.slidesToShow - searchResults.sobremesas.length,
              }).map((_, index) => <div key={`empty-${index}`} />)}
          </Slider>
        ) : (
          <div className="cards">
            {searchResults.sobremesas &&
              searchResults.sobremesas.map((food, index) => (
                <Card
                  key={food.id}
                  img={`https://api-food-explorer-k28p.onrender.com/files/${food.avatar}`}
                  id={food.id}
                  food={food.title}
                  description={food.description}
                  price={food.price}
                  onIncludeAmount={handleIncludeAmount}
                />
              ))}
            {searchResults.sobremesas &&
              searchResults.sobremesas.length < sliderSettings.slidesToShow &&
              Array.from({
                length:
                  sliderSettings.slidesToShow - searchResults.sobremesas.length,
              }).map((_, index) => <div key={`empty-${index}`} />)}
          </div>
        )}

        <p className="category">Bebidas</p>
        {windowWidth >= 1080 ? (
          <Slider {...sliderSettings}>
            {searchResults.bebidas &&
              searchResults.bebidas.map((food, index) => (
                <Card
                  key={food.id}
                  img={`https://api-food-explorer-k28p.onrender.com/files/${food.avatar}`}
                  id={food.id}
                  food={food.title}
                  description={food.description}
                  price={food.price}
                  onIncludeAmount={handleIncludeAmount}
                />
              ))}
            {searchResults.bebidas &&
              searchResults.bebidas.length < sliderSettings.slidesToShow &&
              Array.from({
                length:
                  sliderSettings.slidesToShow - searchResults.bebidas.length,
              }).map((_, index) => <div key={`empty-${index}`} />)}
          </Slider>
        ) : (
          <div className="cards">
            {searchResults.bebidas &&
              searchResults.bebidas.map((food, index) => (
                <Card
                  key={food.id}
                  img={`https://api-food-explorer-k28p.onrender.com/files/${food.avatar}`}
                  id={food.id}
                  food={food.title}
                  description={food.description}
                  price={food.price}
                  onIncludeAmount={handleIncludeAmount}
                />
              ))}
            {searchResults.bebidas &&
              searchResults.bebidas.length < sliderSettings.slidesToShow &&
              Array.from({
                length:
                  sliderSettings.slidesToShow - searchResults.bebidas.length,
              }).map((_, index) => <div key={`empty-${index}`} />)}
          </div>
        )}
      </main>

      <Footer />
    </Container>
  );
}
