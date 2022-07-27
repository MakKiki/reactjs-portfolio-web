import React from "react";

function Intro() {
  return (
    <div className="masthead">
      <div
        className="container"
        style={{
          border: "3px solid #f1f1f1",
          backgroundColor: "rgb(0,0,0,0.5)",
          width: "60%",
        }}
      >
        <div className="masthead-subheading" style={{ marginTop: "4rem" }}>
          This is a portfolio liked website for showcase and practice.
        </div>
        <div
          className="masthead-subheading"
          style={{ marginTop: "2rem", marginBottom: "4rem" }}
        >
          This website is built by ReactJS while Bootstrap and Material-UI are
          used for the CSS references.
        </div>
        <a
          className="btn btn-primary btn-xl text-uppercase"
          href="#skills"
          style={{ marginBottom: "4rem" }}
        >
          Start
        </a>
      </div>
    </div>
  );
}

export default Intro;
