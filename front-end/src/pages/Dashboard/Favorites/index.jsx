import { BiSlider } from "react-icons/bi";
import "./styles.css";

export const Favorites = () => {
  return (
    <div className="favorites-box">
      <div className="favorites-subbox">
        <h3 className="discover-professionals-heading">Seus favoritos</h3>
        <div className="slider">
          <BiSlider size={39} color="var(--primary-03)" />
        </div>
      </div>
      <div className="orange-box">
        <div className="favorite-professionals-box"></div>
      </div>
    </div>
  );
};
