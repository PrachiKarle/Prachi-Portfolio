import React from "react";
;

const Home = () => {
  return (
    <>
      {/* Home */}
      <div
        className="p-5 row m-0"
        id="home"
        style={{ backgroundColor: "black" }}
      >
        <div className="text-light  col-lg-5 col-md-6 col-12 p-5">
          <h1 className="fw-bold">Hello, I'm Prachi</h1>
          <h3 className="fw-bold mb-4">Frontend Developer </h3>
          <h5 style={{ fontFamily: "Cardo, sans-serif" }}>
            As a Fresh Frontend Developer, I’m Ready to Tackle Real-World
            Challenges with a Passion for Creating Seamless Web Experiences.
          </h5>

          <button
            className="btn   px-3 py-2 mt-2"
            style={{ backgroundColor: "#45CE4A" }}
          >
            <a
              href="image/Resume.pdf"
              className="text-decoration-none text-light fw-bold"
            >
              {" "}
              Resume
              <i className="bi bi-download ms-2 fw-bold"></i>
            </a>
          </button>
        </div>

        <div className="col-lg-6 col-md-6 col-12 ms-5">
          <img
            src="image/HomePage.png"
            className="img-fluid"
            height="90%"
            width="100%"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
