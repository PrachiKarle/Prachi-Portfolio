import React, { useState } from "react";

const Skill = () => {
  const [skills, setSkill] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleChange = (val) => {
    let v = val.substr(6, 1);
    switch (v) {
      case "h":
        setSkill([
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ]);
        break;
      case "c":
        setSkill([
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ]);
        break;
      case "b":
        setSkill([
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ]);
        break;
      case "J":
        setSkill([
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ]);
        break;
      case "r":
        setSkill([
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ]);
        break;
      case "m":
        setSkill([
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
        ]);
        break;
      case "g":
        setSkill([
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
        ]);
        break;
      case "C":
        setSkill([
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
        ]);
        break;
      case "n":
        setSkill([
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
        ]);
        break;
      case "e":
        setSkill([
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
        ]);
        break;
      case "d":
        setSkill([
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
        ]);
        break;
      case "s":
        setSkill([
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
        ]);
        break;
    }
  };
  const skill = [
    "image/html.png",
    "image/css.png",
    "image/bootstrap.png",
    "image/JS.png",
    "image/react.png",
    "image/mui.png",
    "image/git.png",
    "image/C++.png",
    "image/node.png",
    "image/express.png",
    "image/db.png",
    "image/sql.png",
  ];

  return (
    <>
      <div className="row p-5 m-0" style={{ backgroundColor: "black" }}>
        <h1 className="text-center fw-bold py-5" style={{ color: "#45CE4A" }}>
          Skills
        </h1>

        <div className="p-3 col-md-6 col-12 text-light">
          {skills[0] ? (
            <>
              <h3 className="my-3">HTML</h3>
              <h5 style={{ color: "#94A3B8" }}>
                HTML is the foundational markup language used to create the
                structure of web pages. It allows developers to define elements
                such as headings, paragraphs, links, and images, forming the
                backbone of web content.
              </h5>
            </>
          ) : null}
          {skills[1] ? (
            <>
              <h3 className="my-3">CSS</h3>
              <h5 style={{ color: "#94A3B8" }}>
                CSS is a stylesheet language used to control the presentation
                and layout of web pages. It allows for the separation of content
                and design, enabling developers to create visually appealing and
                responsive websites.
              </h5>
            </>
          ) : null}
          {skills[2] ? (
            <>
              <h3 className="my-3">Bootstrap</h3>
              <h5 style={{ color: "#94A3B8" }}>
                Bootstrap is a powerful, open-source front-end framework
                designed to streamline web development. It provides a collection
                of pre-designed HTML, CSS, and JavaScript components, enabling
                developers to quickly create responsive, mobile-first websites
                with a consistent design across all devices and browsers.
              </h5>
            </>
          ) : null}
          {skills[3] ? (
            <>
              <h3 className="my-3">Javascript</h3>
              <h5 style={{ color: "#94A3B8" }}>
                JavaScript is a versatile, high-level programming language that
                enables dynamic, interactive features on websites. It allows
                developers to manipulate HTML and CSS, handle user input, and
                create complex functionalities like animations, form validation,
                and real-time updates. As an essential part of modern web
                development, JavaScript runs in the browser, providing a
                seamless user experience without needing to reload the page.
              
              </h5>
            </>
          ) : null}
          {skills[4] ? (
            <>
              <h3 className="my-3">React</h3>
              <h5 style={{ color: "#94A3B8" }}>
              React is a popular JavaScript library for building user interfaces, particularly for single-page applications. Developed by Facebook, it allows developers to create reusable UI components and efficiently update the view when data changes. With its virtual DOM, React enhances performance, enabling fast, dynamic, and scalable web applications. Its component-based architecture makes development more modular and maintainable.
              </h5>
            </>
          ) : null}
          {skills[5] ? (
            <>
              <h3 className="my-3">Material UI</h3>
              <h5 style={{ color: "#94A3B8" }}>
              Material-UI (now known as MUI) is a popular React component library that implements Google's Material Design guidelines. It provides a collection of pre-built, customizable UI components like buttons, grids, and sliders, helping developers create visually appealing and responsive web applications quickly.
              </h5>
            </>
          ) : null}
          {skills[6] ? (
            <>
              <h3 className="my-3">Git</h3>
              <h5 style={{ color: "#94A3B8" }}>
              Git is a distributed version control system used to track changes in source code during software development. It allows multiple developers to collaborate on a project, manage code versions, and work on features in isolation.
              </h5>
            </>
          ) : null}
          {skills[7] ? (
            <>
              <h3 className="my-3">C++</h3>
              <h5 style={{ color: "#94A3B8" }}>
              C++ is a powerful, general-purpose programming language created by Bjarne Stroustrup in 1983 as an extension of the C programming language. It is widely used for system/software development, game development, embedded systems, and more
              </h5>
            </>
          ) : null}
          {skills[8] ? (
            <>
              <h3 className="my-3">Node JS</h3>
              <h5 style={{ color: "#94A3B8" }}>
              Node.js is a runtime environment that allows you to run JavaScript code outside the browser, typically on the server side. It is built on Google Chrome's V8 JavaScript engine, and it enables developers to build fast, scalable, and lightweight applications.
              </h5>
            </>
          ) : null}
          {skills[9] ? (
            <>
              <h3 className="my-3">Express</h3>
              <h5 style={{ color: "#94A3B8" }}>
              Express.js is a fast, lightweight, and flexible Node.js web application framework designed for building web and mobile applications. It simplifies the process of creating server-side functionality by providing robust features for handling routes, middleware, and HTTP requests, making it a popular choice for building APIs and full-stack applications.
              </h5>
            </>
          ) : null}
          {skills[10] ? (
            <>
              <h3 className="my-3">MongoDB</h3>
              <h5 style={{ color: "#94A3B8" }}>
              MongoDB is a popular open-source, NoSQL database designed for handling large volumes of unstructured or semi-structured data. It stores data in a flexible, JSON-like format called BSON, allowing for dynamic schemas. MongoDB is known for its scalability, high performance, and ease of use, making it ideal for modern applications requiring real-time analytics, content management, or large-scale distributed systems.
              </h5>
            </>
          ) : null}
          {skills[11] ? (
            <>
              <h3 className="my-3">SQL</h3>
              <h5 style={{ color: "#94A3B8" }}>
              SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases. It allows users to perform tasks like querying, updating, inserting, and deleting data, as well as defining and managing database structures. SQL is widely used in applications that require structured data storage, such as inventory systems, financial databases, and customer relationship management tools.
              </h5>
            </>
          ) : null}
        </div>

        <div className="col-md-6 col-12 p-3">
          <div className="row m-0 p-0">
            {skill.map((val) => {
              return (
                <>
                  <div
                    className="col-md-3 col-2 p-3"
                    onClick={() => {
                      handleChange(val);
                    }}
                  >
                    <img src={val} height="100%" width="100%" alt="" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Skill;
