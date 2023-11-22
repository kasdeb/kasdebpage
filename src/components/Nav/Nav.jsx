import { Link } from "react-router-dom";
import Radium, { StyleRoot } from "radium";
import { headShake } from "react-animations";
import { ReactComponent as Kasdeb } from "../../content/img/svg/kasdeb.svg";

function Nav() {
  const styles = {
    pulse: {
      ":hover": {
        animation: "x 1s",
        animationName: Radium.keyframes(headShake, "headShake"),
      },
    },
  };
  return (
    <div className="header_wrapper">
      <Kasdeb className="kasdeb-svg" />
      <div className="nav_wrapper">
        <div className="nav_menu">
          <ul>
            <Link to="/">
              <StyleRoot style={styles.pulse}>
                <span className="righteous-font-small-bold">My posts</span>
              </StyleRoot>
            </Link>
            <Link to="/recent-post">
              <StyleRoot style={styles.pulse}>
                <span className="righteous-font-small-bold">Recent post</span>
              </StyleRoot>
            </Link>
          </ul>
        </div>
        <div className="nav_menu">
          <ul>
            <Link to="/about">
              <StyleRoot style={styles.pulse}>
                <span className="righteous-font-small-bold">About</span>
              </StyleRoot>
            </Link>
            <Link to="/search">
              <StyleRoot style={styles.pulse}>
                <span className="righteous-font-small-bold">Search</span>
              </StyleRoot>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
