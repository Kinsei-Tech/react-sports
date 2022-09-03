import { IProvider } from '../Interfaces/Global';
import AddressProvider from './AddressContext';
import AuthProvider from './AuthContext';
import NetworksProvider from './NetworksContext';
import TeamsProvider from './TeamsContext';

const Provider = ({ children }: IProvider) => (
  <AddressProvider>
    <TeamsProvider>
      <NetworksProvider>
        <AuthProvider>{children}</AuthProvider>
      </NetworksProvider>
    </TeamsProvider>
  </AddressProvider>
);

export default Provider;
