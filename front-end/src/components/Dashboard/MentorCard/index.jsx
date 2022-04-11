import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import "./styles.css";
import { MentorModal } from "../MentorModal";

export const MentorCard = ({ name, role, image }) => {
  const [favorite, setFavorite] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addToFavorites = () => {
    setFavorite((prevState) => !prevState);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  // useEffect(() => {
  //   if (isModalVisible) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  // }, [isModalVisible]);

  return (
    <div className="mentor-box">
      <div className="heart-icon-box">
        <button onClick={addToFavorites} className="heart-button">
          {favorite === false ? (
            <AiOutlineHeart size={30} color="var(--primary-03)" />
          ) : (
            <AiFillHeart size={30} color="var(--primary-03)" />
          )}
        </button>
      </div>
      <div className="image-box">
        <img className="mentor-image" src={image} alt={name} />
      </div>
      <h4 className="mentor-name">{name}</h4>
      <caption className="mentor-area">{role}</caption>
      <button className="mentor-button" onClick={openModal}>
        Ver perfil
      </button>
      {isModalVisible ? (
        <MentorModal name={name} role={role} image={image} />
      ) : null}
    </div>
  );
};
