import { useState } from "react";
import { Header } from "../../components/Header";
import { AiOutlineLeft, AiTwotoneCamera } from "react-icons/ai";
import "./styles.css";

export const Profile = () => {
  const [menuActive, setMenu] = useState("perfil");
  return (
    <>
      <Header />
      <main className="flexbox__container">
        <div className="businessCard__cover" />
        <section className="businessCard page">
          <nav className="businessCard__menu">
            <a href="dashboard">
              <AiOutlineLeft size={24} color="var(--neutral-02)" />
            </a>
            <a
              className={`businessCard__menu--item ${
                menuActive === "perfil" ? "active" : ""
              }`}
              onClick={() => {
                setMenu("perfil");
              }}
            >
              Perfil
            </a>
            <a
              className={`businessCard__menu--item ${
                menuActive === "agenda" ? "active" : ""
              }`}
              onClick={() => {
                setMenu("agenda");
              }}
            >
              Agenda
            </a>
          </nav>
          <article className="businessCard__descrition">
            <div className="businessCard__descrition--data">
              <h3>João Paulo</h3>
              <p>Senior User Interface Design</p>
            </div>
            <button>
              <AiTwotoneCamera size={24} color="var(--primary-01)" />
            </button>
            <figure className="businessCard__photo">
              <img
                src="https://images.pexels.com/photos/2328141/pexels-photo-2328141.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2328141.jpg&fm=jpg"
                alt=""
              />
            </figure>
          </article>
        </section>
      </main>
    </>
  );
};
