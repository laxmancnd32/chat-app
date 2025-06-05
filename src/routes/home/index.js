import { useState } from "react";
import SideBarOverlay from "../../components/sidebarOverlay";
import UsersContainer from "../../components/usersContainer";
import ChatContainer from "../../components/chatContainer";
import "./style.scss";

const Home = () => {
  const [chatOverlayProperties, setChatOverlayProperties] = useState({
    display: false,
  });

  return (
    <div className="home">
      <div
        className={
          "left-container" +
          (chatOverlayProperties?.display ? " chat-overlay-open" : "")
        }
      >
        <UsersContainer
          onChatClick={(userDetails) =>
            setChatOverlayProperties({ display: true, userDetails })
          }
        />
      </div>
      <SideBarOverlay
        onClose={() => setChatOverlayProperties({ display: false })}
        isOpen={chatOverlayProperties?.display}
        alignment="right"
        style={{ backgroundColor: "", width: `${400}px` }}
        position="abs"
        displayCloseSidebar={true}
        noShadow
        content={<ChatContainer />}
      />
      {/* <div className="right-container">
        <ChatContainer />
      </div> */}
    </div>
  );
};

export default Home;
