import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Homepage from "./Components/ProjectPage/Homepage/Homepage";
import { paths } from "./paths";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.about} element={<About />} />
        <Route path={paths.userHomepage} element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
