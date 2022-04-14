import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import "./styles.css";
import logo from "../../../src/assets/logo-technical-share.png";

export const Header = ({ page, name, image }) => {
  const [menuHeader, setHeader] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header_container page">
          <img className="header__logo" src={logo} alt="logo" />
          {page === "private" ? (
            <div className="header__profile">
              <div className="header__profile--data">
                <h5>{`Olá, ${name}`}</h5>
                <button
                  onClick={() => {
                    setHeader(!menuHeader);
                  }}
                >
                  <AiOutlineDown />
                  Minha conta
                </button>
                {menuHeader ? (
                  <>
                    <div className="header__profile--decoration"></div>
                    <nav className="header__profile--nav">
                      <Link to="/profile">
                        <CgProfile />
                        Perfil
                      </Link>
                      <Link to="/dashboard">
                        <ImProfile />
                        Dashboard
                      </Link>
                      <Link id="header-exit" to="/">
                        Sair
                      </Link>
                    </nav>
                  </>
                ) : (
                  ""
                )}
              </div>
              <figure className="header__photo">
                <img src={image} alt="" />
              </figure>
            </div>
          ) : (
            <button className="header__conect">
              <a href="dashboard">conectar</a>
            </button>
          )}
        </div>
      </header>
    </>
  );
};
