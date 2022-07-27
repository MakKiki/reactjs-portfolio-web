import React, { useEffect, useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function MessageList(props) {
  return (
    <div className="row align-items-stretch reveal fade-bottom">
      {props.messages.map((ele, index) => (
        <div className="col-md-6 mb-5" key={index}>
          <FormatQuoteIcon
            style={{ color: "white", width: "30px", height: "30px" }}
          />
          <h4 style={{ color: "white" }}>{ele.name}</h4>
          <p style={{ color: "white", marginBottom: "3rem" }}>{ele.content}</p>
          {props.hasUser ? (
            <>
              <p style={{ color: "white" }}>Writer Email : {ele.email}</p>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => props.removeMessage(index)}
              >
                Delete
              </button>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
