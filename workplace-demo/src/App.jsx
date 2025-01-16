import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PortDashboard from './pages/PortDashBoard.jsx';

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/PortDashBoard" element={<PortDashboard />} />
  </Routes>
  </BrowserRouter>
);

export default App;