import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Report from './pages/Report'
import Complaints from './pages/Complaints'
import Check from './pages/Check'
import startingComplaints from './data/complaints'

function App() {
  const [complaints, setComplaints] = useState(startingComplaints)

  function addComplaint(newComplaint) {
    setComplaints([newComplaint, ...complaints])
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="report" element={<Report addComplaint={addComplaint} />} />
        <Route path="complaints" element={<Complaints complaints={complaints} />} />
        <Route path="check" element={<Check complaints={complaints} />} />
      </Route>
    </Routes>
  )
}

export default App;
