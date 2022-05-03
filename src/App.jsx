// import './App.css'
// npm run dev
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header />
      <div className="container content">
        <Form />
        <ListadoPacientes />
      </div>
    </>
  );
}

export default App;
