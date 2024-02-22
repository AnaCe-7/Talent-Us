import "./Filter.css";
import { Link } from "react-router-dom";

export const Filter = () => {
  return (
    <div className="filterContainer">
      <div>Filter</div>
      <nav className="navbar">
        <Link to="/">
          <section className="navbarOptions">
            <img src="../../../src/img/homeIcon.svg" alt="Inicio" />
            Inicio
          </section>
        </Link>
        <Link to="/services">
          <section className="navbarOptions">
            <img
              src="../../../src/img/servicesIcon.svg"
              alt="Servicios"
              className="servicesIcon"
            />
            Servicios
          </section>
        </Link>
        <Link to="">
          <section className="navbarOptions">
            <img src="../../../src/img/favoritesIcon.svg" alt="Favoritos" />
            Favoritos
          </section>
        </Link>
        <Link to="">
          <section className="navbarOptions">
            <img src="../../../src/img/accountIcon.svg" alt="Cuenta" />
            Cuenta
          </section>
        </Link>
      </nav>
    </div>
  );
};
