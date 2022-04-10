import { BiSlider } from "react-icons/bi";
import { MentorCard } from "../../../components/Dashboard/MentorCard";
import "./styles.css";

export const FindMentors = () => {
  return (
    <div className="discover-professionals-box">
      <h3 className="discover-professionals-heading">
        Descubra profissionais na sua área
      </h3>
      <div className="slider">
        <BiSlider size={39} color="var(--primary-03)" />
      </div>
      <div className="discover-professionals-list">
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </div>
  );
};
