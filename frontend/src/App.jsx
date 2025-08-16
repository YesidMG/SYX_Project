import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReportsPage from './pages/ReportsPage';
import WritePage from './pages/WritePage';
import Navbar from './components/Navbar'

const Home = () => <div style={{padding: 16}}>Inicio</div>;
const Quejas = () => <div style={{padding: 16}}>Listado de Quejas</div>;
const Reportes = () => <div style={{padding: 16}}>Reportes</div>;
const Escribir = () => <div style={{padding: 16}}>Redactar queja</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </Router>
  )
}

export default App
