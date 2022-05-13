import Paciente from "./Paciente";

function ListadoPacientes({ patients, setPatient }) {
  console.log(patients);
  return (
    <div className="pacientes">
      {patients && patients.length ? (
        <>
          <h2 className="title">Listado con mis pacientes</h2>

          <p className="description">
            Administra tus {""}
            <span>paciente y citas</span>
          </p>

          {patients.map((patient) => {
            return (
              <Paciente
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="title">No hay pacientes</h2>

          <p className="description">
            Comienza agregando pacientes, {""}
            <span>para verlos aqui</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
