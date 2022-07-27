import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";

function SkillAddForm(props) {
  const [iconFile, setIconFile] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleOnClose = () => {
    props.setOpenDialog(false);
    setIconFile(null);
    setName("");
    setError("");
  };

  const handleIconChange = (event) => {
    setIconFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddSkill = () => {
    if (!iconFile || !name) {
      setError("Please ensure you have uploaded your icon and name.");
    } else {
      props.addSkill({ image: iconFile, name: name });
      setIconFile(null);
      setName("");
      setError("");
    }
  };

  return (
    <Dialog onClose={handleOnClose} open={props.openDialog} fullWidth={true}>
      <div
        className="container text-center"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        {/* <DialogTitle> */}
        <h2 className="text-uppercase" style={{ marginBottom: "3rem" }}>
          Add new skill
        </h2>
        {/* </DialogTitle> */}

        {/* <DialogContent> */}
        <form id="addSkillForm">
          <div className="justify-content-center row align-items-stretch mb-5">
            <div className="col-md-8" style={{ marginBottom: "3rem" }}>
              <div className="form-group">
                <input
                  className="form-control"
                  id="skill-icon"
                  name="skill-icon"
                  type="file"
                  placeholder="Skill Icon *"
                  onChange={handleIconChange}
                />
              </div>
            </div>

            <div className="col-md-8">
              <div className="form-group">
                <input
                  className="form-control"
                  id="skill-name"
                  name="skill-name"
                  type="text"
                  placeholder="Skill Name *"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>

            {error === "" ? null : (
              <p style={{ marginTop: "2rem", color: "red" }}>{error}</p>
            )}
          </div>
        </form>
        {/* </DialogContent> */}

        {/* <DialogActions> */}
        <button
          className="btn btn-primary btn-xl text-uppercase"
          data-bs-dismiss="modal"
          type="button"
          onClick={handleAddSkill}
        >
          Submit
        </button>
        {/* </DialogActions> */}
      </div>
    </Dialog>
  );
}

export default SkillAddForm;
