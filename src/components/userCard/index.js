import Button from "../button";
import "./style.scss";

const UserCard = (props) => {
  const { userDetails, onChatClick } = props;
  const { name, email } = userDetails;

  return (
    <div className="user-card">
      <div className="user-card-details">
        <h1 className="user-card-name">{name}</h1>
        <p className="user-card-email">{email}</p>
      </div>
      <div className="user-card-actions">
        <Button label="Chat" onClick={() => onChatClick(userDetails)} />
      </div>
    </div>
  );
};

export default UserCard;
