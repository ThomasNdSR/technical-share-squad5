import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { MentorCard } from "../../../components/Dashboard/MentorCard";
import "./styles.css";

export const MostAvailable = () => {
  return (
    <div className="discover-quick-professionals-box">
      <h3 className="discover-professionals-heading">
        Profissionais com horários mais próximos
      </h3>
      <div className="previous-next">
        <MdNavigateBefore size={39} color="var(--primary-01)" />
        <MdNavigateNext size={39} color="var(--primary-01)" />
      </div>
      <div className="discover-professionals-list">
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </div>
  );
};
