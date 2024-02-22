import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import "./Categories.css";

export const Categories = () => {
  return (
    <>
      <div className="categoriesContainer">
        <div className="input-group mb-3 searchContainer">
          <span className="input-group-text" id="basic-addon1">
            <Link to="/filter">
              <img src="../../../src/img/searchIcon.svg" alt="Buscador" />
            </Link>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
        <h2 className="categoriesTitle">¿QUÉ QUIERES APRENDER?</h2>
        <div className="categoriesOptions">
          <p>Jardinería</p>
          <div className="imgCategories">
            <img src="../../../src/img/treeIcon.svg" alt="" />
            <img src="../../../src/img/yardIcon.svg" alt="" />
            <img src="../../../src/img/gardenIcon.svg" alt="" />
          </div>
          <p>Cocina</p>
          <div className="imgCategories">
            <img src="../../../src/img/kitchenIcon.svg" alt="" />
            <img src="../../../src/img/cookingIcon.svg" alt="" />
            <img src="../../../src/img/chefIcon.svg" alt="" />
          </div>
          <p>Informática</p>
          <div className="imgCategories">
            <img src="../../../src/img/flowIcon.svg" alt="" />
            <img src="../../../src/img/laptopIcon.svg" alt="" />
            <img src="../../../src/img/codeIcon.svg" alt="" />
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};
