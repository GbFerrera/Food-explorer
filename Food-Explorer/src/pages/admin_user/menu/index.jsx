import { useAuth } from "../../../hooks/auth";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Input } from "../../../components/input";
import { Footer } from "../../../components/footer";
import search from "../../../images/navBar/search.svg";

import { api } from "../../../services";

export function MenuAdmin() {
  const { singOut } = useAuth();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await api.get(`/foods?term=${searchTerm}`);
      setSearchResults(response.data);
      setSearchError(null);
    } catch (error) {
      console.error("Erro ao realizar a pesquisa:", error);
      setSearchResults([]);
      setSearchError("Nenhum resultado encontrado.");
    }
  };

  const handleItemClick = (id) => {
    navigate(`/food/${id}`);
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      handleSearch();
    } else {
      setSearchResults([]);
      setSearchError(null);
    }
  }, [searchTerm]);

  return (
    <Container>
      <header>
        <Link to={"/"}>
          <img src="src/images/close.svg" alt="Imagem para fechar Menu" />
        </Link>

        <p>Menu</p>
      </header>

      <main>
        <div className="search">
          <img src={search} alt="Imagem de lupa de pesquisa" />
          <Input
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id} onClick={() => handleItemClick(result.id)}>
                {result.title}
              </li>
            ))}
          </ul>
        )}

        {searchResults.length === 0 && searchTerm.trim() !== "" && (
          <p id="Error">{searchError || "Nenhum resultado encontrado."}</p>
        )}

        <section>
          <Link to="/new">Novo prato</Link>
          <Link to={"/"} onClick={singOut}>Sair</Link>
        </section>
      </main>

      <Footer />
    </Container>
  );
}
