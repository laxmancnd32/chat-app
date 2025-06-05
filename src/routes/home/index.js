import UsersContainer from "../../components/usersContainer";
import ChatBotContainer from "../../components/chatBotContainer";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="left-container">
        <UsersContainer />
      </div>
      <div className="right-container">
        <ChatBotContainer />
      </div>
    </div>
  );
};

export default Home;
