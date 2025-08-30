import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ReportsPage from './pages/ReportsPage/ReportsPage';
import WritePage from './pages/WritePage/WritePage';
import Navbar from './components/Navbar/Navbar'

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
