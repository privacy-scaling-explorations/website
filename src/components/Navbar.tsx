import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="nav-buttons mb-5">
      <Link to="/"  className="btn bg-green box-shadow">Projects</Link>
      <Link to="/team" className="btn bg-aqua box-shadow">Team</Link>
      <Link to="/about" className="btn bg-pink box-shadow">About Us</Link>
    </nav>
  )
}

export default Navbar;
