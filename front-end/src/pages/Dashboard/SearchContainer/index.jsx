import img1 from "../../../assets/01.svg";
import img2 from "../../../assets/02.svg";
import { RiSearch2Line } from "react-icons/ri";
import "./styles.css";

export const SearchContainer = () => {
  const list = [
    { skill: "Front-end" },
    { skill: "Scrum" },
    { skill: "FullStack" },
    { skill: "Ux design" },
  ];
  return (
    <section className="search-component">
      <img id="img1" src={img1} alt="decoração da pagina com pontos" />
      <h2 id="find-mentors-heading">Encontre um profissional</h2>

      <fieldset className="search">
        <input
          id="search-input"
          className="search__input"
          type="search"
          placeholder="Pesquise por projeto, skill ou função"
        />
        <label for="search-input" id="search-icon" className="search__label">
          <a href="">
            <RiSearch2Line size={30} />
          </a>
        </label>
      </fieldset>
      <div className="options">
        <p className="options__name">Mais buscados:</p>
        <ul className="options__list">
          {list.map((item, index) => (
            <li key={index} className="options__item">
              {item.skill}
            </li>
          ))}
        </ul>
      </div>

      <img id="img2" src={img2} alt="decoração da pagina com ondas" />
    </section>
  );
};
