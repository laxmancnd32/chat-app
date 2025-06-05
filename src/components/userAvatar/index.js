import { generateInitials } from "../../utils";

import "./style.scss";

const UserAvatar = (props) => {
  const { userDetails, size = 30 } = props;
  const initials = generateInitials(userDetails.name);

  return (
    <div
      className="user-avatar"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {initials}
    </div>
  );
};

export default UserAvatar;
