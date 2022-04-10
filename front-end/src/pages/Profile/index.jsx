import { Header } from "../../components/Header";
import "./styles.css";

export const Profile = () => {
  return (
    <>
      <Header />
      <main className="flexbox__container">
        <div className="profile__cover"></div>
        <div className="profile__main">
          <div className="profile__top">
            <nav className="profile__nav__menu">
              <h4>
                <a className="profile__a1" href="">
                  Perfil
                </a>
              </h4>
              <h4>
                <a className="profile__a2" href="">
                  Agenda
                </a>
              </h4>
            </nav>
            <div className="profile__box">
              <span className="profile__info">
                <h3 className="profile__name">Lorem, ipsum.</h3>
                <h6 className="profile__title">Lorem ipsum dolor sit.</h6>
              </span>
              <img
                alt
                src="https://images.pexels.com/photos/2328141/pexels-photo-2328141.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2328141.jpg&fm=jpg"
              />
            </div>
          </div>
          <div className="profile__bottom">
            <div className="profile__box__1">
              <div className="profile__bio">
                <h4>Bio</h4>
                <div className="profile__div__big"></div>
              </div>
              <div className="profile__projects">
                <h4>Projetos</h4>
                <div className="profile__div__big"></div>
              </div>
            </div>
            <div className="profile__box__2">
              <div className="profile__skills">
                <h4>Skills</h4>
                <div className="profile__div__big"></div>
              </div>
              <div className="profile__smallbox">
                <div className="profile__social">
                  <h4>Redes Sociais</h4>
                  <div className="profile__div__small"></div>
                  <div className="profile__div__small"></div>
                </div>
                <div className="profile__access">
                  <h4>Acessibilidade</h4>
                  <div className="profile__div__small"></div>
                  <div className="profile__div__small"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
