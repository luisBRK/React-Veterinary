// import './App.css'
// npm run dev
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  // functios
  const deletePatient = (patientId) => {
    const patientsUpdate = patients.filter(
      (patientDel) => patientDel.id !== patientId
    );
    setPatients(patientsUpdate);
  };

  return (
    <>
      <Header />
      <div className="container content">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />

        <ListadoPacientes
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </>
  );
}

export default App;
