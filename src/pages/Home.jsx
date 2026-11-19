import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Bad ride? Report it.</h1>
      <p>
        Extra passengers, charged twice, an overcrowded bus. Report the
        problem with the vehicle number, and check any ride before you board.
      </p>
      
      <div className="buttons">
        <Link to="/report" className="btn">Report a problem</Link>
        <Link to="/check" className="btn btn-light">Check a ride</Link>
      </div>
    </div>
  )
}

export default Home