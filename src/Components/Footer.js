import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { paths } from "../paths";

export default function Footer() {
  return (
    <footer>
      <p>
        <span>&#169;</span>Created and coded by Lena
      </p>
      <div className="social-media-links">
        <Link to={paths.linkedin}>
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </Link>
        <Link to={paths.instagrams}>
          <FontAwesomeIcon icon={faSquareInstagram} size="xl" />
        </Link>
      </div>
    </footer>
  );
}
