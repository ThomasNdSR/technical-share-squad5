import { AiOutlineEdit } from "react-icons/ai";
import "./style.css";

export const UserExperienceCard = (props) => {
  return (
    <article className="experienceCard">

        <h5 className="experienceCard__title">{props.title}</h5>

        <section className="experienceCard__list">
        <div className="experienceCard__scroll">
          <div>{props.children}</div>
          </div>
        </section>
        <button onClick={props.clickEdit}>
          <AiOutlineEdit size={24} color="var(--primary-01)" />
        </button>

    </article>
  );
};
