import { useState } from "react";
import { ProfileCard } from "../ProfileCard";
import { PeopleCard } from "../PeopleCard";
import "./style.css";

export function SchedulingCard() {
  const [menuScheduling, setScheduling] = useState("mentor");
  return (
    <article className="schedulingCard">
      <div className="schedulingCard__menu">
        <button
          onClick={() => {
            setScheduling("mentor");
          }}
          className={`schedulingCard__menu--option ${
            menuScheduling === "mentor" ? "ativo" : ""
          }`}
        >
          Mentor
        </button>
        <button
          onClick={() => {
            setScheduling("mentorado");
          }}
          className={`schedulingCard__menu--option ${
            menuScheduling === "mentorado" ? "ativo" : ""
          }`}
        >
          Mentorado
        </button>
      </div>
      <div className="schedulingCard__item">
        <div  className="schedulingCard__item-option">
        <h4>Agendamentos</h4>
        <ProfileCard>
          <PeopleCard
            name="Fulana"
            role="teste role"
            image="http://localhost:8000/img/1649529388674-modelo09.png"
          />
        </ProfileCard>
        </div>
        <div className="schedulingCard__item-option">
        <h4>Minha agenda</h4>
        <ProfileCard>
          <PeopleCard
            name="Fulana"
            role="teste role"
            image="http://localhost:8000/img/1649529388674-modelo09.png"
          />
        </ProfileCard>
        </div>
      </div>
    </article>
  );
}
