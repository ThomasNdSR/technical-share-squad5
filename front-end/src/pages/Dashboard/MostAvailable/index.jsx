import { useEffect, useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { MentorCard } from "../../../components/Dashboard/MentorCard";
import "./styles.css";

export const MostAvailable = () => {
  return (
    <section className="discover-quick-professionals-box">
      <div className="discover-container">
        <h3 className="discover-professionals-heading">
          Profissionais com horários mais próximos
        </h3>
        <div className="previous-next">
          <MdNavigateBefore size={39} color="var(--primary-01)" />
          <MdNavigateNext size={39} color="var(--primary-01)" />
        </div>
      </div>
      <div className="discover-professionals-list">
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </section>
  );
};
