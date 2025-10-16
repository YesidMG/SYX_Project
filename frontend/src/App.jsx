import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ReportsPage from './pages/ReportsPage/ReportsPage'
import WritePage from './pages/WritePage/WritePage'
import Navbar from './components/NavBar/Navbar'

function App() {
  const [entityFilter, setEntityFilter] = useState('')
  return (
    <Router>
      <Navbar onFilterChange={setEntityFilter} />
      <Routes>
        <Route path="/" element={<HomePage entityFilter={entityFilter} />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </Router>
  )
}

export default App
