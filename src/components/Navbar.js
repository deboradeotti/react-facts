import logo from '../images/react-logo.png';

export default function Navbar() {
  return(
    <nav className="nav-bar">
      <img className="nav-logo" src={logo} />
      <h3 className="nav-title">ReactFacts</h3>
      <h4 className="nav-subtitle">React Course - Project 1</h4>
    </nav>
  )
}