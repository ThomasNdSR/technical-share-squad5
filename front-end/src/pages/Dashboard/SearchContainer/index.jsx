import img1 from "../../../assets/01.svg";
import img2 from "../../../assets/02.svg";
import { RiSearch2Line } from "react-icons/ri";
import "./styles.css";

export const SearchContainer = () => {
  return (
    <div className="search-component">
      <img id="img1" src={img1} alt="" />
      <h2 id="find-mentors-heading">Encontre um profissional</h2>

      <div className="search">
        <input
          id="search-input"
          type="search"
          placeholder="Pesquise por projeto, skill ou função"
        />
        <div id="search-icon">
          <RiSearch2Line size={30} />
        </div>
      </div>

      <img id="img2" src={img2} alt="" />
    </div>
  );
};
