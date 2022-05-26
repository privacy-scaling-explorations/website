import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="nav-buttons mb-5">
      <Link to="/"  className="btn btn-green btn-shadow">Projects</Link>
      <Link to="/team" className="btn btn-aqua btn-shadow">Team</Link>
      <Link to="/about" className="btn btn-pink btn-shadow">About Us</Link>
    </nav>
  )
}

export default Navbar;
