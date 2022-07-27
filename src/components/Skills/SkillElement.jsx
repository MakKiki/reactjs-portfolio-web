import React, { useEffect, useState } from "react";

function SkillElement(props) {
  return (
    <div className="col-md-4" style={{ marginBottom: "2rem" }}>
      <img src={props.image} alt="Skill Icon" style={{ height: "80px" }} />
      <h4 className="my-3">{props.name}</h4>
      {props.hasUser ? (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.removeSkill(props.id)}
        >
          Delete
        </button>
      ) : null}
    </div>
  );
}

export default SkillElement;
