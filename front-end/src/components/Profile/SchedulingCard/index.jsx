import { useState } from "react";
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
    </article>
  );
}
