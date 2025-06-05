import { useState, useEffect } from "react";
import UserAvatar from "../userAvatar";
import Button from "../button";

import "./style.scss";

const ChatContainer = (props) => {
  const { userDetails = {}, updateChatHistory, chatHistory } = props;
  const [message, setMessage] = useState("");
  const chatHistoryForUser = chatHistory[userDetails.id] || [];

  useEffect(() => {
    setMessage("");
  }, [userDetails?.id]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // TODO: Handle sending message
      console.log("Sending message:", message);
      updateChatHistory(message, userDetails);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-container-title">
        <label>Chat</label>
        <div className="chat-user-info">
          <UserAvatar userDetails={userDetails} size={40} />
          <label>{userDetails?.name}</label>
        </div>
      </div>
      <div className="chat-container-messages">
        {chatHistoryForUser.map((msg, index) => (
          <div key={index} className="message-card">
            <div className="message-content">{msg?.message}</div>
            <div className="message-time">{msg?.time}</div>
          </div>
        ))}
      </div>
      <div className="chat-container-input">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          rows={1}
        />
        <Button onClick={handleSendMessage} label="Send" />
      </div>
    </div>
  );
};

export default ChatContainer;
