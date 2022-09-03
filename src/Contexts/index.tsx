import { IProvider } from '../Interfaces/Global';
import AuthProvider from './AuthContext';
import NetworksProvider from './NetworksContext';
import TeamsProvider from './TeamsContext';

const Provider = ({ children }: IProvider) => (
  <TeamsProvider>
    <NetworksProvider>
      <AuthProvider>{children}</AuthProvider>
    </NetworksProvider>
  </TeamsProvider>
);

export default Provider;
