import React from "react";

const Contact = () => {
  return (
    <>
    
      <div className="row m-0 p-5" style={{ backgroundColor: "black" }}>
      <h1 className="text-center mb-5 fw-bold" style={{color:"#45CE4A"}}>Get in touch</h1>
        <form action="">
          <div className="form-group d-flex">
            <div className="p-3 w-100 ">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                required
              />
            </div>
            <div className="p-3 w-100 ">
              <input
                type="email"
                placeholder="Email"
                className="form-control" 
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <div className="p-3 w-100 ">
              <input
                type="text"
                placeholder="Subject"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="p-3 w-100 ">
              <textarea name="" id="" className="form-control" placeholder="Message">
              </textarea>
            </div>
          </div>
          <div className="form-group text-center">
             <button className="btn text-light px-5 py-2 mt-3"
            style={{ backgroundColor: "#45CE4A" }}>Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
