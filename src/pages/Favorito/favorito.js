import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favorito() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@showmovies");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function trash(id) {
    let filtroFilmes = filmes.filter((filme) => {
      return filme.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@showmovies", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso!");
  }

  return (
    <div className=" filme__favorito">
      <h1 className="filme__favorito-title">Filmes Favoritos</h1>
      {filmes.length === 0 && <span>Voce não possui filme salvo :( </span>}
      <div className="filme__container-list">
        <ul>
          {filmes.map((filme) => {
            return (
              <li key={filme.id}>
                <span className="filme__title-filme">{filme.title}</span>
                <div className="filme__content-details-button">
                  <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                  <button onClick={() => trash(filme.id)}>Remover</button>
                  {/*                 <img
                  src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
                  alt={filme.title}
                /> */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Favorito;
