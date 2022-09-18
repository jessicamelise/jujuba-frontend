import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';

function App() {
  return (
    <BrowserRouter basename={process.env.BASENAME_PATH}>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
