import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header" img src="../images/pipoca.jpeg">
        <Link className="header__logo" to="/">
          Show movies
        </Link>

        <Link className="header__botao-favorito" to="/favorito">
          Meus Filmes
        </Link>
      </div>
    </header>
  );
}

export default Header;
