import "./App.css";
import FormLogin from "./Components/Forms/FormLogin";
import Modal from "./Components/Modal";
import Global from "./style/global";

//Pagina de teste dos componentes

function App() {
  return (
    <div className="App">
      <Global />
      <Modal>
        <FormLogin></FormLogin>
      </Modal>
    </div>
  );
}

export default App;
