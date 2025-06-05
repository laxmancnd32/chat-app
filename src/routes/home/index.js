import { useState } from "react";
import SideBarOverlay from "../../components/sidebarOverlay";
import UsersContainer from "../../components/usersContainer";
import ChatContainer from "../../components/chatContainer";
import "./style.scss";

const Home = () => {
  const [chatOverlayProperties, setChatOverlayProperties] = useState({
    display: false,
    userDetails: {},
  });
  const [chatHistory, setChatHistory] = useState({});
  const selectedUserId = chatOverlayProperties?.userDetails?.id;

  const handleChatClick = (userDetails) => {
    setChatOverlayProperties({ display: true, userDetails });
  }

  const updateChatHistory = (message, userDetails) => {
    setChatHistory((prevHistory) => ({
      ...prevHistory,
      [userDetails.id]: [
        ...(prevHistory[userDetails.id] || []),
        {
          message,
          time: new Date().toLocaleTimeString(),
          sentBy: "loggedInUser",
        },
      ],
    }));
  };

  return (
    <div className="home">
      <div
        className={
          "left-container" +
          (chatOverlayProperties?.display ? " chat-overlay-open" : "")
        }
      >
        <UsersContainer
          onChatClick={handleChatClick}
          selectedUserId={selectedUserId}
        />
      </div>
      <SideBarOverlay
        onClose={() => setChatOverlayProperties({ display: false })}
        isOpen={chatOverlayProperties?.display}
        alignment="right"
        style={{ backgroundColor: "", width: `${400}px` }}
        position="fixed"
        displayCloseSidebar={true}
        noShadow
        content={
          <ChatContainer
            userDetails={chatOverlayProperties?.userDetails}
            updateChatHistory={updateChatHistory}
            chatHistory={chatHistory}
          />
        }
      />
    </div>
  );
};

export default Home;
