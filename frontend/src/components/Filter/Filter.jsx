import "./Filter.css"

export const Filter = () => {
  return (
    <div className="filterContainer">
      <form>
        <p>Categoría</p>
        <select className="form-select" aria-label="Default select example">
          <option selected></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <p>Modelo</p>
        <select className="form-select" aria-label="Default select example">
          <option selected></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <p>Participantes</p>
        <select className="form-select" aria-label="Default select example">
          <option selected></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <p>Edades de los participantes</p>
        <input type="range" className="form-range" id="customRange1"></input>
      </form>
    </div>
  );
};
