import React, { useEffect, useState } from "react";
import SkillAddForm from "./Skills/SkillAddForm";
import SkillElement from "./Skills/SkillElement";
// import flutter_logo from "../assets/skills/flutter-logo.svg";

function Skills(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [skillList, setSkillList] = useState([
    {
      image: process.env.PUBLIC_URL + "/assets/skills/flutter-logo.svg",
      name: "Flutter",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/skills/react-logo.svg",
      name: "ReactJS",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/skills/html-logo.png",
      name: "HTML",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/skills/javascript-logo.png",
      name: "JavaScript",
    },
  ]);

  const handleOnOpen = () => {
    setOpenDialog(true);
  };

  const addSkill = (newSkillEle) => {
    setOpenDialog(false);
    setSkillList([...skillList, newSkillEle]);
  };

  const removeSkill = (index) => {
    setSkillList(skillList.filter((ele, i) => i !== index));
  };

  return (
    <section className="page-section" id="skills">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Skills</h2>
          <h3 className="section-subheading text-muted">
            My Programing Languages.
          </h3>
        </div>
        <div className="row text-center reveal fade-left">
          {/* <SkillElement image={flutter_logo} name="Flutter" /> */}
          {skillList.map((ele, index) => {
            return (
              <SkillElement
                key={index}
                image={ele.image}
                name={ele.name}
                hasUser={props.hasUser}
                id={index}
                removeSkill={removeSkill}
              />
            );
          })}
          {props.hasUser ? (
            <div className="col-md-4" style={{ marginBottom: "2rem" }}>
              <button type="button" className="btn-add" onClick={handleOnOpen}>
                +
              </button>
              <SkillAddForm
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                addSkill={addSkill}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Skills;
