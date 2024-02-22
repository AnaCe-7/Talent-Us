import "./Filter.css";

export const Filter = () => {
  return (
    <div className="filterContainer">
      <h2 className="filterTitle">ÚNETE Y CREA TU PROPIO FUTURO</h2>
      <form className="filterForm">
        <p>Categoría</p>
        <select className="form-select" aria-label="Default select example">
          <option selected></option>
          <option value="jardineria">Jardinería</option>
          <option value="informatica">Informática</option>
          <option value="cocina">Cocina</option>
        </select>
        <p>Modelo</p>
        <select className="form-select" aria-label="Default select example">
          <option selected></option>
          <option value="presencial">Presencial</option>
          <option value="online">Online</option>
        </select>
        <p>Participantes</p>
        <select className="form-select" aria-label="Default select example">
          <option selected></option>
          <option value="menosDeCinco">- 5</option>
          <option value="entreCincoYDiez">5 - 10</option>
          <option value="masDeDiez">+ 10</option>
        </select>
        <div className="formBtnContainer">
          <button type="send" className="filterFormBtn">
            BUSCAR
          </button>
        </div>
      </form>
    </div>
  );
};
