import React, { useState } from "react";

import "./Input.css";

const Input = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event, message, setMessage) : null
        }
      />
      <button
        className="sendButton"
        onClick={(e) => sendMessage(e, message, setMessage)}
      >
        Send
      </button>
    </form>
  );
};

export default Input;
