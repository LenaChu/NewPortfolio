import { Link } from "react-router-dom";
import "./Button.css";

export default function Button(props) {
  return (
    <Link to={props.path} style={{ textDecoration: "none", color: "#fff" }}>
      <button className="bttn default">{props.text}</button>
    </Link>
  );
}
