import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import "./styles.css";

export const MentorCard = ({ name, role, image }) => {
  const [favorite, setFavorite] = useState(false);

  const addToFavorites = () => {
    setFavorite((prevState) => !prevState);
  };

  return (
    <section className="card">
      <button onClick={addToFavorites} className="card__heart--button">
        {favorite === false ? (
          <AiOutlineHeart size={30} color="var(--primary-03)" />
        ) : (
          <AiFillHeart size={30} color="var(--primary-03)" />
        )}
      </button>
      <figure className="card__image">
        <img className="card__image--src" src={image} alt={name} />
      </figure>
      <article className="card__descriptions">
        <h6 className="card__descriptions--name">{name}</h6>
        <caption className="card__descriptions--area">{role}</caption>
        <button className="card__descriptions--button">Ver perfil</button>
      </article>
    </section>
  );
};
