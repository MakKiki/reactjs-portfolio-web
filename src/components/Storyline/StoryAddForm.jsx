import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";

function StoryAddForm(props) {
  const [img, setImg] = useState(null);
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [noToTime, setNoToTime] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const month = new Map([
    ["01", "January"],
    ["02", "February"],
    ["03", "March"],
    ["04", "April"],
    ["05", "May"],
    ["06", "June"],
    ["07", "July"],
    ["08", "August"],
    ["09", "September"],
    ["10", "October"],
    ["11", "November"],
    ["12", "December"],
  ]);

  const handleOnClose = () => {
    props.setOpenDialog(false);
    setImg(null);
    setFromTime("");
    setToTime("");
    setNoToTime(false);
    setTitle("");
    setContent("");
    setError("");
  };

  const handleImgChange = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
  };

  const handleFromTimeChange = (event) => {
    setFromTime(event.target.value);
  };

  const handleToTimeChange = (event) => {
    setToTime(event.target.value);
  };

  const handleNoToTimeChange = (event) => {
    setNoToTime(event.target.checked);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAddStory = () => {
    if (!img || !fromTime || (!noToTime && !toTime) || !title || !content) {
      setError("Please ensure you have inputted all the data.");
    } else {
      let period;
      if (noToTime) {
        const fromTimeSplitted = fromTime.split("-");
        period = `${month.get(fromTimeSplitted[1])} ${fromTimeSplitted[0]}`; //e.g. June 2021
      } else {
        const fromTimeSplitted = fromTime.split("-");
        const toTimeSplitted = toTime.split("-");
        if (fromTimeSplitted[0] === toTimeSplitted[0]) {
          period = `${month.get(fromTimeSplitted[1])} - ${month.get(
            toTimeSplitted[1]
          )} ${toTimeSplitted[0]}`; //e.g. June - August 2020
        } else {
          period = `${month.get(fromTimeSplitted[1])} ${
            fromTimeSplitted[0]
          } - ${month.get(toTimeSplitted[1])} ${toTimeSplitted[0]}`; //e.g. June 2020 - August 2021
        }
      }
      props.addStory({
        image: img,
        heading: period,
        subheading: title,
        body: content,
      });
      setImg(null);
      setFromTime("");
      setToTime("");
      setNoToTime(false);
      setTitle("");
      setContent("");
      setError("");
    }
  };

  return (
    <Dialog onClose={handleOnClose} open={props.openDialog} fullWidth={true}>
      <div
        className="container"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        {/* <DialogTitle> */}
        <h2
          className="text-uppercase text-center"
          style={{ marginBottom: "3rem" }}
        >
          Add new story
        </h2>
        {/* </DialogTitle> */}

        {/* <DialogContent> */}
        <form id="addStoryForm">
          <div className="justify-content-center row align-items-stretch mb-5">
            <div className="col-md-10" style={{ marginBottom: "1rem" }}>
              <div className="form-group">
                <label>Image *</label>
                <input
                  className="form-control"
                  id="story-img"
                  name="story-img"
                  type="file"
                  onChange={handleImgChange}
                />
              </div>
            </div>

            <div className="col-md-10">
              <div className="form-group">
                <label>Period *</label>
                <div className="row">
                  <div className="col-md-2">From : </div>
                  <div className="col-md-8">
                    <input
                      className="form-control"
                      id="story-heading"
                      name="story-heading"
                      type="month"
                      value={fromTime}
                      onChange={handleFromTimeChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-10" style={{ marginBottom: "0.5rem" }}>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-2">To: </div>
                  <div className="col-md-8">
                    <input
                      className="form-control"
                      id="story-heading"
                      name="story-heading"
                      type="month"
                      min={fromTime}
                      value={toTime}
                      onChange={handleToTimeChange}
                      disabled={noToTime}
                    />
                  </div>
                  <div className="col-md-2" style={{ paddingTop: "0.3rem" }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      style={{ marginRight: "0.5rem" }}
                      value={noToTime}
                      onChange={handleNoToTimeChange}
                    />
                    Now
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-10" style={{ marginBottom: "0.5rem" }}>
              <div className="form-group">
                <label>Title *</label>
                <input
                  className="form-control"
                  id="story-subheading"
                  name="story-subheading"
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
            </div>

            <div className="col-md-10">
              <div className="form-group">
                <label>Content *</label>
                <textarea
                  className="form-control"
                  id="story-body"
                  name="story-body"
                  type="text"
                  value={content}
                  onChange={handleContentChange}
                />
              </div>
            </div>

            <div className="col-md-10">
              {error === "" ? null : (
                <p
                  className="text-center"
                  style={{ marginTop: "2rem", color: "red" }}
                >
                  {error}
                </p>
              )}
            </div>
          </div>
        </form>
        {/* </DialogContent> */}

        {/* <DialogActions> */}
        <div className="text-center">
          <button
            className="btn btn-primary btn-xl text-uppercase"
            data-bs-dismiss="modal"
            type="button"
            onClick={handleAddStory}
          >
            Submit
          </button>
        </div>
        {/* </DialogActions> */}
      </div>
    </Dialog>
  );
}

export default StoryAddForm;
