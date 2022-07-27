import React, { useEffect, useState } from "react";
import Story from "./Storyline/Story";
import StoryAddForm from "./Storyline/StoryAddForm";
// import universitylife from "../assets/storyline/universitylife.jpg";

function StoryLine(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [storyList, setStoryList] = useState([
    {
      image: process.env.PUBLIC_URL + "/assets/storyline/universitylife.jpg",
      heading: "2017-2021",
      subheading: "University Life",
      body: "Studied in Hong Kong Baptist University. Major in Computer Science while my concentration is Information System and Analysis.",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/storyline/internship.jpg",
      heading: "June-August 2019",
      subheading: "Internship in HKHS",
      body: "As a summer internship clerk in Hong Kong Housing Society.",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/storyline/internship2.jpg",
      heading: "July-August 2020",
      subheading: "Internship in Animae Technology Limited",
      body: "As a software developer (summer internship) in Anime Technology Limited. Mainly focus on front-end web development.",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/storyline/worklife.jpg",
      heading: "2021 - NOW",
      subheading: "Working Life",
      body: "New start for me and is time to go to a real work place for work.",
    },
    {
      image: process.env.PUBLIC_URL + "/assets/storyline/full-time.jpg",
      heading: "August 2021",
      subheading: "Full-time in HKT",
      body: "As an application developer in hong Kong Telecom. Mainly focus on front-end mobile app development.",
    },
  ]);

  const handleOnOpen = () => {
    setOpenDialog(true);
  };

  const addStory = (newStory) => {
    setOpenDialog(false);
    setStoryList([...storyList, newStory]);
  };

  const removeStory = (index) => {
    setStoryList(storyList.filter((ele,i) => i !== index));
  };

  return (
    <section className="page-section bg-light" id="storyline">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">StoryLine</h2>
          <h3 className="section-subheading text-muted">My Storyline.</h3>
        </div>
        <ul className="timeline reveal fade-right">
          {storyList.map((ele, index) => {
            return (
              <Story
                key={index}
                index={index}
                hasUser={props.hasUser}
                removeStory={removeStory}
                image={ele.image}
                heading={ele.heading}
                subheading={ele.subheading}
                body={ele.body}
              />
            );
          })}
          {props.hasUser ? (
            <>
              <li>
                <div className="timeline-image">
                  <button
                    type="button"
                    className="btn-storyline-add rounded-circle img-fluid"
                    style={{ width: "100%" }}
                    onClick={handleOnOpen}
                  >
                    +
                  </button>
                </div>
              </li>
              <StoryAddForm
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                addStory={addStory}
              />
            </>
          ) : null}
          {/* <Story
            image={universitylife}
            invertedClass=""
            heading="2017-2021"
            subheading="University Life"
            body="Studied in Hong Kong Baptist University. Major in Computer Science while my concentration is Information System and Analysis."
          /> */}
        </ul>
      </div>
    </section>
  );
}

export default StoryLine;
