import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid py-5" style={{ backgroundColor: "black" }}>
        <h1 style={{color:"#45CE4A"}} className="text-center py-2 fw-bold">About me</h1>
        <div className="row">
          <div className="col-md-6 col-12 p-5">
            <img src="image/about.avif" height="100%" width="100%" alt="" />
          </div>
          <div className="col-md-6 col-12 p-5 text-light">
            <h2 className="fw-bold pt-3 pb-2">Prachi</h2>
            <h5 className="" style={{ color: "#45CE4A" }}>
              Front end Developer
            </h5>
            <h6 className="py-3 text-justify" style={{ color: "#94A3B8" }}>
              I'm Prachi, currently pursuing a Bachelor of Engineering in
              Computer Engineering. I am passionate about creating beautiful,
              user-friendly websites and have a strong foundation in solving
              coding problems and data structure questions. I bring a unique
              blend of frontend development expertise and algorithmic thinking
              to every project. I am excited to bring my skills and enthusiasm
              to new challenges in the tech industry.
            </h6>
            
              <button className="px-3 py-2" style={{backgroundColor:"transparent",border:"2px solid #45CE4A"}}>
                <a href="https://www.linkedin.com/in/prachi-karle-789277296"  alt="Linkedin"className="text-decoration-none" style={{color:"#45CE4A"}}>
                  {" "}
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
              </button>
             
              <button className="px-3 py-2 mx-3" style={{backgroundColor:"transparent",border:"2px solid #45CE4A"}}>
                <a href="https://github.com/PrachiKarle" className="text-decoration-none"style={{color:"#45CE4A"}}>
                  <i className="bi bi-github fs-4"></i>
                </a>
              </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
