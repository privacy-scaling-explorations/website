import { Link } from 'react-router-dom'
import logo from '../images/pse-logo.svg';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar mb-5">
      <div className="container-fluid">
        <div>
          <Link to="#top" className="btn bg-green box-shadow">About</Link>
          <Link to="#Projects" className="btn bg-pink box-shadow">Projects</Link>
          <Link to="#Team" className="btn bg-aqua box-shadow">Team</Link></div>
        <div>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="pse logo" className="pselogo" />
          </a>
        </div>
        <div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;
