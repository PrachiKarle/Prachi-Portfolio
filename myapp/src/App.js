import "./App.css";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import "./App.css";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md px-5 py-2">
        {/* Brand-Portfolio with logo */}
        <a href="#" className="text-decoration-none text-light d-flex">
          <h4
            className="ms-2 mt-2"
            style={{
              fontFamily: "Cardo, sans-serif",
              fontWeight: "400",
              fontSize: "30px",
            }}
          >
            Prachi
          </h4>
        </a>

        {/* Navbar toggler */}
        <button
          className="navbar-toggler bg-light"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Link */}
        <div className="navbar-collapse" id="nav">
          <ul className="navbar-nav ms-lg-auto ms-3">
            <li className="nav-item">
              <a className="nav-link text-light" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#skill">
                Skill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#gallery">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home */}
      <div className="container-fluid m-0 p-0" id="home">
        <Home />
      </div>

      {/* About */}
      <div className="container-fluid m-0 p-0" id="about">
        <About />
      </div>

      {/* Skill */}
      <div className="container-fluid m-0 p-0" id="skill">
        <Skill />
      </div>

      {/* Projects */}
      <div className="container-fluid m-0 p-0" id="project">
        <Projects />
      </div>

      {/* contact */}
      <div className="container-fluid m-0 p-0" id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
