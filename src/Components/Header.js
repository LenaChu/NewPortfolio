import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [state, setState] = useState("");

  function handleClick() {
    if (state !== "") {
      setState("");
    } else {
      setState("active");
    }
  }
  return (
    <header className="header">
      <div className="nav-bttn_container" onClick={handleClick}>
        <div className={`line-1 ${state}`}></div>
        <div className={`line-2 ${state}`}></div>
        <div className={`line-3 ${state}`}></div>
      </div>
      <div className={`container__fullsize ${state}`}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgb(0 0 0/87%)" }}
        >
          <div className="nav-bttn">Home</div>
        </Link>

        <Link
          to="/about"
          style={{ textDecoration: "none", color: "rgb(0 0 0/87%)" }}
        >
          <div className="nav-bttn">About</div>
        </Link>
      </div>
    </header>
  );
}
