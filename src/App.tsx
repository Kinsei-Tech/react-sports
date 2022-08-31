import "./App.css";
import FormLogin from "./Components/Forms/FormLogin";
import Modal from "./Components/Modal";
import LoginPage from "./Pages/LoginPage";
import Global from "./style/global";

//Pagina de teste dos componentes

function App() {
  return (
    <div className="App">
      <Global />
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
