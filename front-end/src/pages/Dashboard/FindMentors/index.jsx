import { useEffect, useState } from "react";
import { MentorCard } from "../../../components/Dashboard/MentorCard";
import { api } from "../../../services/api";
import "./styles.css";

import {
  AiOutlineCalendar,
  AiOutlineContacts,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
  MdEventAvailable,
} from "react-icons/ai";
import { BiSlider } from "react-icons/bi";

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
    <div className="discover-professionals-box">
      <h3 className="discover-professionals-heading">
        Descubra profissionais na sua área
      </h3>
      <div className="slider">
        <BiSlider size={39} color="var(--primary-03)" />
      </div>
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
            available={
              user.available.length > 0
                ? user.available
                : ["Não há horários disponíveis no momento"]
            }
            image={
              user.img === undefined
                ? "https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
                : `http://localhost:8000/img/${user.img.path.slice(11)}`
            }
          />
        ))}
      </div>
    </div>
  );
};
