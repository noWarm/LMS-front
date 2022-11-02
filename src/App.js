import { Routes, Route } from 'react-router-dom';
import { Navigator } from './Navigator';
import { Welcome } from './Welcome';
import { Dashboard } from './Dashboard';
import { Register } from './auth/components/Register';
import { Login } from './auth/components/Login';
import { AuthProvider } from './auth/provider/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Navigator />

      <Routes>
        <Route index element = {<Welcome/>} />
        <Route path="welcome" element={<Welcome/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    
    </AuthProvider>
  );
}

export default App;
