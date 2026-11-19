import { useState } from 'react'
import complaints from '../data/complaints'
import ComplaintCard from '../components/ComplaintCard'

function clean(text) {
  return text.replaceAll(' ', '').toUpperCase()
}

function Check() {
  const [plate, setPlate] = useState('')
  const [searched, setSearched] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setSearched(plate)
  }

  const results = complaints.filter(
    (c) => clean(c.plate) === clean(searched)
  )

  return (
    <div className="check">
      <h1>Check a ride</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="MH12 AB 1234"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
        />
        <button type="submit" className="btn">Check</button>
      </form>

      {searched !== '' && (
        <div className="results">
          <p className="count">
            {results.length === 0
              ? 'No complaints found for ' + searched.toUpperCase()
              : results.length + ' complaint(s) found for ' + searched.toUpperCase()}
          </p>
          {results.map((c) => (
            <ComplaintCard key={c.id} complaint={c} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Check