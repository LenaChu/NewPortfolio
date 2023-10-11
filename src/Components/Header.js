import NavBttn from "./NavBttn";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="nav-bttn__container">
        <NavBttn name="Home" />
        <NavBttn name="Resume" />
      </div>
    </header>
  );
}
