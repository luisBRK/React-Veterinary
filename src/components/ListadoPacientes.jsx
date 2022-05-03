import Paciente from "./Paciente";

function ListadoPacientes() {
  return (
    <div className="pacientes">
      <h2 className="title">Listado con mis pacientes</h2>
      <p className="description">
        Administra tus {""}
        <span>paciente y citas</span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
}

export default ListadoPacientes;
