import "./PageNav.css";
import { Link } from "react-router-dom";

export default function PageNav() {
  return (
    <div className="page-navigation">
      <Link style={{ textDecoration: "none", color: "rgb(0 0 0/87%)" }}>
        <span>Notification Center</span>
      </Link>
    </div>
  );
}
