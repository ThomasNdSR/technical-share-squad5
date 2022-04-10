import "./styles.css";
import logo from "../../../src/assets/logo-technical-share.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__box">
        <img className="header__logo" src={logo} alt="logo" />
      </div>
    </header>
  );
};
