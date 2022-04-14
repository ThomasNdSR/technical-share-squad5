import { AiOutlineDown } from "react-icons/ai";
import destaqueTop from "../../../assets/homePageTop.png";
import "./style.css";

export const Spotlight = () => {
  return (
    <div className="page">
      <section className="spotlight">
        <article className="spotlight__description">
          <h3 className="spotlight__description--title">
            Conectando quem precisa com que sabe ajudar
          </h3>
          <h6 className="spotlight__description--text">
            Ensine, tire dúvidas e aprenda com um profissional de verdade
          </h6>
          <button className="spotlight__description--singIn">
            cadastre-se
          </button>
        </article>
        <img
          src={destaqueTop}
          className="spotlight__image"
          alt="Ilustração das conexões entre pessoas"
        />
        <AiOutlineDown size={40} color="var(--primary-01)" />
      </section>
    </div>
  );
};
