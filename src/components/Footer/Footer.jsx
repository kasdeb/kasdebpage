import { ReactComponent as Kasdeb } from "../../content/img/svg/kasdeb.svg";
import "./Footer.css";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <span className="footer-note">
        &copy; {year} by Kasper Debicki
      </span>
      <span className="footer-kasdeb">
        <Kasdeb height="10" width="45" />
      </span>
    </div>
  );
}

export default Footer;
