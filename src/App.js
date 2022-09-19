import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { LoggedArea } from './pages/loggedArea/LoggedArea';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logged-area" element={<LoggedArea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
