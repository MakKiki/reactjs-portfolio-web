import React, { useEffect, useState } from "react";

function MessageForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    props.addMessage({ name, email, content });
    setName("");
    setEmail("");
    setContent("");
  };

  return (
    <form id="messageForm">
      <div className="form-group">
        <div className="row align-items-stretch mb-5">
          <div className="col-md-6" style={{ marginBottom: "2rem" }}>
            <input
              className="form-control"
              id="msg-name"
              name="msg-name"
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="col-md-6" style={{ marginBottom: "2rem" }}>
            <input
              className="form-control"
              id="msg-email"
              name="msg-email"
              type="email"
              placeholder="Your Email (Only the website owner will know)"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="col-md-12">
            <div className="form-group form-group-textarea mb-md-0">
              <textarea
                className="form-control"
                id="msg-content"
                name="msg-content"
                placeholder="Message You Want To Leave *"
                value={content}
                onChange={handleContentChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary btn-xl text-uppercase"
        disabled={name && content ? false : true}
        id="msg-submitBtn"
        name="msg-submitBtn"
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default MessageForm;
