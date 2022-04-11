import { useEffect, useState } from "react";
import { BiSlider } from "react-icons/bi";
import { MentorCard } from "../../../components/Dashboard/MentorCard";
import { api } from "../../../services/api";
import "./styles.css";

export const FindMentors = () => {
  const [users, setUsers] = useState([]);

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
      <button className="slider">
        <BiSlider size={39} color="var(--primary-03)" />
      </button>
      </div>
      <div className="discover-professionals-list">
        {users.map((user) => (
          <MentorCard
            key={user._id}
            name={user.name}
            role={user.role}
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
