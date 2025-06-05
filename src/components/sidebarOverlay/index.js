import { IoMdCloseCircle } from "react-icons/io";

import "./style.scss";

const SideBarOverlay = (props) => {
  const {
    className = "",
    alignment = "right",
    content = "",
    style = {},
    noShadow = false,
    position = "",
    isOpen = false,
    displayCloseSidebar = false,
    onClose = () => {},
  } = props;

  const getSidebarClassName = () => {
    let defaultClass = "sidebar-overlay-container";

    defaultClass += className.length > 0 ? ` ${className}` : "";
    defaultClass += alignment === "left" ? " left-aligned" : " right-aligned";
    defaultClass += noShadow ? " no-shadow" : "";
    defaultClass += position.length > 0 ? ` ${position}` : "";
    defaultClass += isOpen ? " open-sidebar" : " closed-sidebar";
    return defaultClass;
  };

  return (
    <div className={getSidebarClassName()} style={style}>
      <div className="overlay-content">
        {displayCloseSidebar && (
          <span
            className="overlay-close"
            onClick={onClose}
            data-automation-id="sidebar_overlay_close"
          >
            <IoMdCloseCircle />
          </span>
        )}
        {content}
      </div>
    </div>
  );
};

export default SideBarOverlay;
