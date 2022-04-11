import {
  AiOutlineCalendar,
  AiOutlineContacts,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
  MdEventAvailable,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { BiSlider } from "react-icons/bi";
import { MentorCard } from "../../../components/Dashboard/MentorCard";
import { api } from "../../../services/api";
import "./styles.css";

export const FindMentors = () => {
  const [users, setUsers] = useState([]);
  const [sliderActive, setSlider] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await api.get("/user");
      const data = response.data;

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="discover-professionals-box">
      <div className="discover-container">
        <h3 className="discover-professionals-heading">
          Descubra profissionais na sua área
        </h3>
        <button
          onClick={() => {
            setSlider(!sliderActive);
          }}
          className="slider"
        >
          <BiSlider size={30} color="var(--primary-03)" />
        </button>
      </div>
      <ul className={`slider__sort ${sliderActive ? "active" : ""}`}>
        <li>
          <AiOutlineSortAscending size={16} color="var(--primary-03)" /> Ordem
          ascendente
        </li>
        <li>
          <AiOutlineSortDescending size={16} color="var(--primary-03)" /> Ordem
          descendente
        </li>
        <li>
          <AiOutlineCalendar size={16} color="var(--primary-03)" />{" "}
          Disponibilidade
        </li>
        <li>
          <AiOutlineContacts size={16} color="var(--primary-03)" /> Da sua área
        </li>
      </ul>
      <div className="discover-professionals-list">
        {users.map((user) => (
          <MentorCard
            key={user._id}
            name={user.name}
            role={user.role}
            project={
              user.project.length > 0
                ? user.project
                : ["Não há projetos cadastrados"]
            }
            skills={user.skill}
            available={user.available}
            image={
              user.img === undefined
                ? "https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
                : `http://localhost:8000/img/${user.img.path.slice(11)}`
            }
          />
        ))}
      </div>
    </section>
  );
};
