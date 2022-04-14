import { useEffect, useState } from "react";
import img1 from "../../../assets/01.svg";
import img2 from "../../../assets/02.svg";
import { RiSearch2Line } from "react-icons/ri";
import "./styles.css";

export const SearchContainer = ({ users, setFilteredUsers }) => {
  const skills = ["Front-end", "Scrum", "Full Stack", "UX Design"];

  const handleSearch = (query) => {
    console.log(query);
    const filterUsers = users.filter(
      (user) => user.role.includes(query) || user.project.includes(query)
    );

    // const filterUsersBySkill = users.filter((user) =>
    //   user.skill.forEach((skill) =>
    //     console.log(Object.values(skill)[1].includes(query))
    //   )
    // );

    setFilteredUsers(filterUsers);
  };

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
          onChange={(e) => handleSearch(e.target.value)}
        />
        <RiSearch2Line size={25} color="var(--primary-02)" />
      </fieldset>

      <div className="options">
        <p className="options__name">Mais buscados:</p>
        <ul className="options__list">
          {skills.map((skill, index) => (
            <li key={index} className="options__item">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <img id="img2" src={img2} alt="decoração da pagina com ondas" />
    </section>
  );
};
