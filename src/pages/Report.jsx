import { useState } from 'react'

const problems = {
  Rickshaw: [
    'More than 3 passengers in the back',
    'Dropped midway and charged again',
    'Asked for more than the fare',
  ],
  Bus: [
    'Overcrowded beyond capacity',
    'Passenger eating or throwing wrappers out',
    'Loud reels or noise',
  ],
}

const stationMap = {
  Handewadi: 'Pursungi Police Station',
  Katraj: 'Katraj Police Station',
  Hadapsar: 'Hadapsar Police Station',
}

function Report({ addComplaint }) {
  const [type, setType] = useState('Rickshaw')
  const [plate, setPlate] = useState('')
  const [problem, setProblem] = useState(problems.Rickshaw[0])
  const [route, setRoute] = useState('')
  const [area, setArea] = useState('Handewadi')
  const [message, setMessage] = useState('')

  function handleType(e) {
    setType(e.target.value)
    setProblem(problems[e.target.value][0])
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (plate.trim() === '') {
      setMessage('Please enter the vehicle number.')
      return
    }
    addComplaint({
      id: Date.now(),
      type: type,
      plate: plate.trim().toUpperCase(),
      problem: problem,
      route: route.trim() === '' ? 'Route not given' : route,
      area: area,
      station: stationMap[area],
      status: 'Submitted',
    })
    setMessage(
      'Report submitted for ' + plate.toUpperCase() +
      ' and sent to ' + stationMap[area]
    )
    setPlate('')
    setRoute('')
  }

  return (
    <div className="report">
      <h1>Report a problem</h1>
      <form onSubmit={handleSubmit}>
        <label>Vehicle type</label>
        <select value={type} onChange={handleType}>
          <option>Rickshaw</option>
          <option>Bus</option>
        </select>

        <label>Vehicle number</label>
        <input
          type="text"
          placeholder="MH12 AB 1234"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
        />

        <label>What happened?</label>
        <select value={problem} onChange={(e) => setProblem(e.target.value)}>
          {problems[type].map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <label>Route (optional)</label>
        <input
          type="text"
          placeholder="Handewadi to Katraj"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
        />

        <label>Area</label>
        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option>Handewadi</option>
          <option>Katraj</option>
          <option>Hadapsar</option>
        </select>

        <button type="submit" className="btn">Submit report</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  )
}

export default Report