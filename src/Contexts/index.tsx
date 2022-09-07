import { IProvider } from '../Interfaces/Global';
import AddressProvider from './AddressContext';
import AuthProvider from './AuthContext';
import EditProfileProvider from './EditProfileContext';
import NetworksProvider from './NetworksContext';
import TeamsProvider from './TeamsContext';

const Provider = ({ children }: IProvider) => (
  <AuthProvider>
    <AddressProvider>
      <EditProfileProvider>
        <TeamsProvider>
          <NetworksProvider>{children}</NetworksProvider>
        </TeamsProvider>
      </EditProfileProvider>
    </AddressProvider>
  </AuthProvider>
);

export default Provider;
