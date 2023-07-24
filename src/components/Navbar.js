import logo from '../images/react-logo.png';

export default function Navbar(props) {
  return(
    <nav className={`nav-bar ${props.darkMode ? "dark": ""}`}>
      <img className="nav-logo" src={logo} />
      <h3 className="nav-title">ReactFacts</h3>
      <div className="toggler">
          <p className="toggler__light">Light</p>
          <div className="toggler__slider" onClick={props.toggleDarkMode}>
            <div className="toggler__slider--circle"></div>
          </div>
          <p className="toggler__dark">Dark</p>
      </div>
    </nav>
  )
}