import { Routes, Route } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Dashboard } from './Dashboard';
import { Register } from './auth/components/Register';
import { Login } from './auth/components/Login';
import { AuthProvider } from './auth/provider/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import { AccountProvider } from './AccountProvider';

function App() {
  return (
    <AuthProvider>
    <AccountProvider>
      <Routes>
        <Route index element = {<Welcome/>} />
        <Route path="welcome" element={<Welcome/>} />
        <Route 
          path="dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          } />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
      </Routes>

    </AccountProvider>
    </AuthProvider>
  );
}

export default App;
