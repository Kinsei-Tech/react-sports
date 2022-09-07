import { IProvider } from '../Interfaces/Global';
import AddressProvider from './AddressContext';
import AuthProvider from './AuthContext';
import EditProfileProvider from './EditProfileContext';
import EditTeamProvider from './EditTeamContext';
import NetworksProvider from './NetworksContext';
import TeamsProvider from './TeamsContext';

const Provider = ({ children }: IProvider) => (
  <AuthProvider>
    <AddressProvider>
      <EditTeamProvider>
        <EditProfileProvider>
          <TeamsProvider>
            <NetworksProvider>{children}</NetworksProvider>
          </TeamsProvider>
        </EditProfileProvider>
      </EditTeamProvider>
    </AddressProvider>
  </AuthProvider>
);

export default Provider;
