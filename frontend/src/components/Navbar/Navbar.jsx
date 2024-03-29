import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <section className="navbarOptions">
            <img src="../../../src/img/homeIcon.svg" alt="Inicio" />
            Inicio
          </section>
        </Link>
        <Link to="/categories">
          <section className="navbarOptions">
            <img
              src="../../../src/img/servicesIcon.svg"
              alt="Servicios"
              className="servicesIcon"
            />
            Servicios
          </section>
        </Link>
        <Link to="/login">
          <section className="navbarOptions">
            <img src="../../../src/img/favoritesIcon.svg" alt="Favoritos" />
            Favoritos
          </section>
        </Link>
        <Link to="/login">
          <section className="navbarOptions">
            <img src="../../../src/img/accountIcon.svg" alt="Cuenta" />
            Cuenta
          </section>
        </Link>
      </nav>
    </div>
  );
};
