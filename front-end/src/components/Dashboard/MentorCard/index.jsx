import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import "./styles.css";
import { MentorModal } from "../MentorModal";

export const MentorCard = ({
  name,
  role,
  image,
  skills,
  project,
  available,
}) => {
  const [favorite, setFavorite] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addToFavorites = () => {
    setFavorite((prevState) => !prevState);
  };

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalVisible]);

  return (
    <section className="card">
      <button onClick={addToFavorites} className="card__heart--button">
        {favorite === false ? (
          <AiOutlineHeart size={22} color="var(--primary-03)" />
        ) : (
          <AiFillHeart size={22} color="var(--primary-03)" />
        )}
      </button>
      <figure className="card__image">
        <img className="card__image--src" src={image} alt={name} />
      </figure>
      <article className="card__descriptions">
        <h6 className="card__descriptions--name">{name}</h6>
        <caption className="card__descriptions--area">{role}</caption>
      </article>
      <button
        onClick={() => setIsModalVisible(true)}
        className="card__descriptions--button"
      >
        Ver perfil
      </button>
      {isModalVisible ? (
        <MentorModal
          image={image}
          name={name}
          role={role}
          project={project}
          skill={skills}
          available={available}
          closeModal={() => setIsModalVisible(false)}
        />
      ) : null}
    </section>
  );
};
