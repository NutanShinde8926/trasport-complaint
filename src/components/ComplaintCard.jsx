function ComplaintCard({ complaint }) {
  return (
    <div className="card">
      <div className="card-top">
        <span className="plate">{complaint.plate}</span>
        <span className="status">{complaint.status}</span>
      </div>
      <h3>{complaint.problem}</h3>
      <p>{complaint.type} · {complaint.route}</p>
    </div>
  )
}

export default ComplaintCard