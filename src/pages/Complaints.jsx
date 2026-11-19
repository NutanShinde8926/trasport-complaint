import complaints from '../data/complaints'
import ComplaintCard from '../components/ComplaintCard'

function Complaints() {
  return (
    <div className="complaints">
      <h1>All complaints</h1>
      {complaints.map((c) => (
        <ComplaintCard key={c.id} complaint={c} />
      ))}
    </div>
  )
}

export default Complaints