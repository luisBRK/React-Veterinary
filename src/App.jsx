// import './App.css'
// npm run dev
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  return (
    <>
      <Header />
      <div className="container content">
        <Form patients={patients} setPatients={setPatients} patient={patient} />

        <ListadoPacientes patients={patients} setPatient={setPatient} />
      </div>
    </>
  );
}

export default App;
