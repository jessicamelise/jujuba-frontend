import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;