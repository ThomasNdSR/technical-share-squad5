import { AiOutlineHeart } from "react-icons/ai";
import "./styles.css";

export const MentorCard = () => {
  return (
    <div className="box">
      <div className="heart-icon-box">
        <AiOutlineHeart size={30} color="var(--primary-03)" />
      </div>
      <div className="image-box">
        <img
          className="mentor-image"
          src="https://brasilnft.art.br/pytsycky/2021/10/CryptoPunk-95-mi-PNG.png"
          alt=""
        />
      </div>
      <h4 className="mentor-name">John Doe</h4>
      <caption className="mentor-area">UX/UI Designer</caption>
      <button className="mentor-button">Ver perfil</button>
    </div>
  );
};
