import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Homepage from "./Components/ProjectPage/Homepage/Homepage";
import { paths } from "./paths";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.about} element={<About />} />
        <Route path={paths.userHomepage} element={<Homepage />} />
        <Route
          path={paths.linkedin}
          element={<Redirect location="linkedin" />}
        />
        <Route
          path={paths.instagram}
          element={<Redirect location="instagram" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

function Redirect(props) {
  if (props.location === "linkedin") {
    window.location.replace("https://www.linkedin.com/in/lenachuuxdesign/");
  } else if (props.location === "instagram") {
    window.location.replace("https://www.instagram.com/lenadelreyw/");
  }
}
