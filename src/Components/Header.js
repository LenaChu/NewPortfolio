import NavBttn from "./NavBttn";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="nav-bttn__container">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <NavBttn name="Home" />
        <NavBttn name="Resume" />
      </div>
    </header>
  );
}
