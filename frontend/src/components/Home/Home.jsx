import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homeContainer">
      <img src="../../../src/img/logo.svg" alt="Logo Talentus" className="logo"/>
      <section className="homeBtns">
        <Link to="/categories">
          <button className="btnServices">SERVICIOS</button>
        </Link>
        <Link to="/login">
          <button className="btnLogin">LOGIN</button>
        </Link>
      </section>
    </div>
  );
};
