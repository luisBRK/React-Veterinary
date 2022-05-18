const Paciente = ({ patient, setPatient, deletePatient }) => {
  const { petName, customerName, email, date, symptom, id } = patient;
  const handleDelete = () => {
    const answer = confirm("Eliminar paciente completamente?");

    if (answer) {
      deletePatient(id);
    } else {
      return;
    }
  };
  return (
    <div className="paciente">
      <p>
        Nombre de la mascota: {""}
        <span>{petName}</span>
      </p>

      <p>
        Propietario: {""}
        <span>{customerName}</span>
      </p>

      <p>
        Email: {""}
        <span>{email}</span>
      </p>

      <p>
        Fecha: {""}
        <span>{date}</span>
      </p>

      <p>
        Sintomas: {""}
        <span></span>
        <span>{symptom}</span>
      </p>

      <div className="buttons">
        <button
          className="edit"
          type="button"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>

        <button className="delete" type="button" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
