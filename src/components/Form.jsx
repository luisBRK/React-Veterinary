import React from "react";

function Form() {
  return (
    <div className="formulary">
      <h2 className="title">Seguimiento de pacientes</h2>
      <p className="description">
        Agrega pacientes y {""}
        <span>administralos</span>
      </p>

      <form>
        <div className="section">
          <label htmlFor="name_pet">Nombre de la mascota</label>
          <input type="text" id="name_pet" />
        </div>

        <div className="section">
          <label htmlFor="name">Nombre del propietario</label>
          <input type="text" id="name" />
        </div>

        <div className="section">
          <label htmlFor="email">Email del propietario</label>
          <input type="email" id="email" />
        </div>

        <div className="section">
          <label htmlFor="alta">Fecha de alta</label>
          <input type="date" id="alta" />
        </div>

        <div className="section">
          <label htmlFor="sintomas">Sintomas de la mascota</label>
          <textarea id="sintomas" />
        </div>

        <input type="submit" className="button" value="Agregar paciente" />
      </form>
    </div>
  );
}

export default Form;
