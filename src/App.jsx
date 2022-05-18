// import './App.css'
// npm run dev
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Form from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  const getLC = JSON.parse(localStorage.getItem("patients")) ?? [];
  const [patients, setPatients] = useState(getLC);
  const [patient, setPatient] = useState({});

  // use effect

  // only ONE TIME!
  // useEffect(() => {
  //   const getLocalSt = () => {
  //     const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];
  //     setPatients(patientsLS);
  //   };
  //   getLocalSt();
  // }, []);

  // localstorage
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

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
