import './topbar.scss';
import {LinkedIn, GitHub, Email} from "@material-ui/icons";

function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Tyler Downey</a>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/tylerdowney83/" target="_blank">
              <LinkedIn className="icon2"/>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/tylerdowney13" target="_blank">
              <GitHub className="icon"/>
            </a>
          </div>
          <div className="itemContainer">
            <a href="mailto:tylerdowney83@gmail.com">
              <Email className="icon"/>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="navigation">
            <div className="navItemContainer">
              <a href="#skills">
                <span>Skills</span>
              </a>
            </div>
            <div className="navItemContainer">
              <a href="#projects">
                <span>Projects</span>
              </a>
            </div>
            <div className="navItemContainer">
              <a href="#contact">
                <span>Contact</span>
              </a>
            </div>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar