import React, { useEffect, useState } from "react";
import MessageForm from "./Message/MessageForm";
import MessageList from "./Message/MessageList";

function Message(props) {
  const [messages, setMessages] = useState([
    {
      name: "Adam Li",
      email: "adam@gmail.com",
      content:
        "It is nice to see your profile. This website helps me know more about you. Hope we can have change to meet each other.",
    },
    {
      name: "Tracy Chan",
      email: "",
      content: "Happy to meet you!",
    },
    {
      name: "Henry Wong",
      email: "henry1234@gmail.com",
      content:
        "Great. I like this website. It get me better to know you more. But I think you can add more things such as your hobbies in your portfolio. I also hope we can have change to meet each other. Feel free to contact me!",
    },
  ]);

  const addMessage = (messageObj) => {
    setMessages([...messages, messageObj]);
  };

  const removeMessage = (index) => {
    setMessages(messages.filter((ele, i) => index !== i));
  };

  return (
    <section className="page-section" id="message">
      <div className="container text-center">
        <div>
          <h2 className="section-heading text-uppercase">Message</h2>
          <h3 className="section-subheading text-muted">
            The messages people left to me.
          </h3>
        </div>
        <MessageList
          messages={messages}
          removeMessage={removeMessage}
          hasUser={props.hasUser}
        />

        <div style={{ marginTop: "7rem" }}>
          <h3 className="section-subheading text-muted">Leave you message!</h3>
        </div>
        <MessageForm addMessage={addMessage} />
      </div>
    </section>
  );
}

export default Message;
