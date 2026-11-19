import { NavLink, Link } from 'react-router-dom'

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h2 className="logo">TransGuard</h2>
      </Link>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/report">Report</NavLink>
        <NavLink to="/complaints">Complaints</NavLink>
        <NavLink to="/check">Check</NavLink>
      </div>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  )
}

export default Navbar