import "./style.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="head-section header-left-section">
        <label>{`Chat App`}</label>
      </div>
      <div className="head-section header-center-section"></div>
      <div className="head-section header-right-section"></div>
    </header>
  );
};

export default Header;
