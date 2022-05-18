import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  // Hooks
  const [petName, setPetName] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptom, setSymptom] = useState("");

  const [error, setError] = useState(false);

  // use Effect rellenar form
  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName);
      setcustomerName(patient.customerName);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptom(patient.symptom);
    }
  }, [patient]);

  // functions

  const generarId = () => {
    const date = Date.now().toString();
    const random = Math.random().toString(20).substr(2);
    return date + random;
  };

  // set a new patient
  const handleSubmit = (event) => {
    event.preventDefault();

    // validation
    if ([petName, customerName, email, date, symptom].includes("")) {
      setError(true);
      return;
    }

    // error declaration
    setError(false);

    // patient object
    const patientObj = {
      petName,
      customerName,
      email,
      date,
      symptom,
    };

    // update or create patient
    if (patient.id) {
      // edit
      patientObj.id = patient.id;
      const updatePatients = patients.map((patientState) =>
        patientState.id === patient.id ? patientObj : patientState
      );

      setPatients(updatePatients);
      // borrar paciente para editar
      setPatient({});
    } else {
      // create
      // patients array
      patientObj.id = generarId();
      setPatients([...patients, patientObj]);
    }

    // refactor form
    setPetName("");
    setcustomerName("");
    setEmail("");
    setDate("");
    setSymptom("");
  };

  return (
    <div className="formulary">
      <h2 className="title">Seguimiento de pacientes</h2>
      <p className="description">
        Agrega pacientes y {""}
        <span>administralos</span>
      </p>

      <form onSubmit={handleSubmit}>
        {error && <Error message="Todos los campos son necesarios" />}
        {/* pet name */}
        <div className="section">
          <label htmlFor="petName">Nombre de la mascota</label>
          <input
            type="text"
            id="petName"
            value={petName}
            onChange={(event) => setPetName(event.target.value)}
          />
        </div>
        {/* customer name */}
        <div className="section">
          <label htmlFor="customerName">Nombre del propietario</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(event) => setcustomerName(event.target.value)}
          />
        </div>
        {/* email */}
        <div className="section">
          <label htmlFor="email">Email del propietario</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        {/* date */}
        <div className="section">
          <label htmlFor="alta">Fecha de alta</label>
          <input
            type="date"
            id="alta"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        {/* symptom */}
        <div className="section">
          <label htmlFor="symptom">Sintomas de la mascota</label>
          <textarea
            id="symptom"
            value={symptom}
            onChange={(event) => setSymptom(event.target.value)}
          />
        </div>

        <input
          type="submit"
          className="button"
          value={patient.id ? "Edit patient" : "Add patient"}
        />
      </form>
    </div>
  );
};

export default Form;
