import NavBttn from "./NavBttn";
import { useState } from "react";
import "./Header.css";

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
        <NavBttn name="Home" />
        <NavBttn name="Resume" />
      </div>
    </header>
  );
}
