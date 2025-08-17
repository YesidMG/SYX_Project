import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReportsPage from './pages/ReportsPage';
import WritePage from './pages/WritePage';
import Navbar from './components/Navbar'

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
