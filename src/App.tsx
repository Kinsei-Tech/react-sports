import Provider from './Contexts';
import { RoutesMain } from './Routes';
import Global from './style/global';

//Pagina de teste dos componentes

function App() {
  return (
    <Provider>
      <Global />
      <RoutesMain />
    </Provider>
  );
}

export default App;
