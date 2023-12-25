import NavBttn from "./NavBttn";
import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="nav-bttn__container">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="container__fullsize">
          <NavBttn name="Home" />
          <NavBttn name="Resume" />
        </div>
      </div>
    </header>
  );
}
