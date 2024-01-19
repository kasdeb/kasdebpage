import { Link } from "react-router-dom";
import Radium, { StyleRoot } from "radium";
import { headShake } from "react-animations";
import { ReactComponent as Kasdeb } from "../../content/img/svg/kasdeb.svg";
import "./Nav.css";

function Nav() {
  const styles = {
    pulse: {
      ":hover": {
        animation: "x 1s",
        animationName: Radium.keyframes(
          headShake,
          "headShake"
        )
      }
    }
  };
  return (
    <div className="nav-main-wrapper">
      <Kasdeb className="kasdeb-svg" />
      <div className="nav-links-wrapper">
        <ul>
          <Link className="link" to="/">
            <StyleRoot style={styles.pulse}>
              <span className="righteous-font-small-bold">
                My posts
              </span>
            </StyleRoot>
          </Link>
          <Link
            className="link"
            to="/recent-post"
          >
            <StyleRoot style={styles.pulse}>
              <span className="righteous-font-small-bold">
                Recent post
              </span>
            </StyleRoot>
          </Link>
        </ul>
        <ul>
          <Link className="link" to="/about">
            <StyleRoot style={styles.pulse}>
              <span className="righteous-font-small-bold">
                About
              </span>
            </StyleRoot>
          </Link>
          <Link className="link" to="/search">
            <StyleRoot style={styles.pulse}>
              <span className="righteous-font-small-bold">
                Search
              </span>
            </StyleRoot>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
