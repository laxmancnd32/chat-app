import { USERS } from "../../constants";
import UserCard from "../userCard";

import "./style.scss";

const UsersContainer = (props) => {
  return (
    <div className="users-container">
      <div className="users-container-title">
        <label>Users</label>
      </div>
      <div className="users-container-list">
        {USERS.map((user) => (
          <UserCard key={user.id} userDetails={user} {...props} isSelected={user?.id === props?.selectedUserId} />
        ))}
      </div>
    </div>
  );
};

export default UsersContainer;
