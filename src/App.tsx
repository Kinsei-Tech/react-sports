import { Toaster } from 'react-hot-toast';
import Provider from './Contexts';
import { RoutesMain } from './Routes';
import Global from './style/global';

function App() {
  return (
    <Provider>
      <Global />
      <Toaster
        toastOptions={{
          style: {
            border: '2px solid green',
          },
        }}
      />
      <RoutesMain />
    </Provider>
  );
}

export default App;
