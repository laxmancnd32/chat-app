import "./style.scss";

const MessageCard = (props) => {
  const { message, position } = props;
  return (
    <div
      className={`message-card ${
        position === "right" ? "position-right" : "position-left"
      }`}
    >
      <div className="message-content">{message?.message}</div>
      <div className="message-time">{message?.time}</div>
    </div>
  );
};

export default MessageCard;
