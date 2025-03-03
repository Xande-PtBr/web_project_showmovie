import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
/* import "../../blocks/home.css"; */

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "be5c8a7b363e064fe917284672d8ec1e",
          lenguage: "pt-BR",
          page: 1,
        },
      });

      //console.log(response.data.result.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="container__lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong className="container__titulo-filme">{filme.title}</strong>
              <img
                className="container__image-filme"
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={"filme.title"}
              />
              <Link
                className="container__botao-acessar"
                to={`/filme/${filme.id}`}
              >
                Acessar
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
