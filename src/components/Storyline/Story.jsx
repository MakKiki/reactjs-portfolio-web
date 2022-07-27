import React, { useEffect, useState } from "react";

function Story(props) {
  return (
    <li className={props.index % 2 === 0 ? "timeline-inverted" : ""}>
      <div className="timeline-image">
        <img
          className="rounded-circle img-fluid"
          src={props.image}
          alt="Story Pic"
        />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{props.heading}</h4>
          <h4 className="subheading">{props.subheading}</h4>
        </div>
        <div className="timeline-body">
          <p className="text-muted">{props.body}</p>
          {props.hasUser ? (
            <button
              type="button"
              className="btn btn-danger mt-4"
              onClick={() => props.removeStory(props.index)}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default Story;
