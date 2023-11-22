import { ReactComponent as Kasdeb } from "../../content/img/svg/kasdeb.svg";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer_wrapper">
      <span className="footer_note">&copy; {year} by Kasper Debicki</span>
      <span className="footer_kasdeb">
        <Kasdeb height="15" width="45" />
      </span>
    </div>
  );
}

export default Footer;
