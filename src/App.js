import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Homepage from "./Components/ProjectPage/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="userhomepage" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
