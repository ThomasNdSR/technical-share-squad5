import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { CgProfile} from "react-icons/cg";
import "./styles.css";
import logo from "../../../src/assets/logo-technical-share.png";

export const Header = () => {
  const [menuHeader, setHeader] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header_container page">
          <img className="header__logo" src={logo} alt="logo" />
          <div className="header__profile">
            <div className="header__profile--data">
              <h5>Olá, João</h5>
              <button onClick={()=>{
                setHeader(!menuHeader)
              }}>
                <AiOutlineDown />
                minha conta
              </button>
              {menuHeader?(
                <>
              <div className="header__profile--decoration"></div>
              <nav className="header__profile--nav">
                <a href="profile"><CgProfile /> Perfil</a>
                <a href=""><ImProfile />Agenda</a>
                <a href="homePage">sair</a>
              </nav>
              </>
              ):('')}
            </div>
            <figure className="header__photo">
              <img
                src="https://images.pexels.com/photos/2328141/pexels-photo-2328141.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2328141.jpg&fm=jpg"
                alt=""
              />
            </figure>
          </div>
        </div>
      </header>
    </>
  );
};
