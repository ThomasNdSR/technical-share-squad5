import { useState } from "react";
import { api } from "../../../services/api";
import { SiMicrosoftteams } from "react-icons/si";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import "./style.css";

export function PeopleCard({ name, role, image, time, date, place, id }) {
  const [detail, setDetail] = useState(false);

  const deleteDate = async () => {
    await api
      .delete(`/user/appointment/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <article className="peopleCard">
      <div className="peopleCard_data">
        <figure className="header__photo">
          <img src={image} alt="" />
        </figure>
        <div className="peopleCard_descrition">
          <h4>{name}</h4>
          <p>{role}</p>
          {detail ? (
            <ul className="peopleCard_descrition">
              <li className="peopleCard_descrition--detail">{`Dia:${new Date(date)}`}</li>
              <li className="peopleCard_descrition--detail">{`Horario:${time}`}</li>
              <li className="peopleCard_descrition--detail">{`Local:${place}`}</li>
              <SiMicrosoftteams size={24} color="var(--secondary-01)" />
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="peopleCard_option">
        <button
          className="peopleCard_option-item"
          onClick={() => {
            setDetail(!detail);
          }}
        >
          ver detalhe {!detail ? <AiOutlineDown /> : <AiOutlineUp />}
        </button>
        <button
          className="peopleCard_option-delete"
          onClick={() => {
            deleteDate();
          }}
        >
          cancelar
        </button>
      </div>
    </article>
  );
}
