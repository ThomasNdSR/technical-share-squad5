import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { ProfileCard } from "../ProfileCard";
import { PeopleCard } from "../PeopleCard";
import { TableHour } from "../TableHour";
import "./style.css";

export function SchedulingCard({ available }) {
  const [menuScheduling, setMenuScheduling] = useState("mentor");
  const [scheduling, setScheduling] = useState([]);
  const getScheduling = async () => {
    await api
      .get(`user/appointment/${available._id}`)
      .then((res) => {
        setScheduling(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getScheduling();
  }, []);
  return (
    <article className="schedulingCard">
      {console.log(scheduling)}
      <div className="schedulingCard__menu">
        <button
          onClick={() => {
            setMenuScheduling("mentor");
          }}
          className={`schedulingCard__menu--option ${
            menuScheduling === "mentor" ? "ativo" : ""
          }`}
        >
          Mentor
        </button>
        <button
          onClick={() => {
            setMenuScheduling("mentorado");
          }}
          className={`schedulingCard__menu--option ${
            menuScheduling === "mentorado" ? "ativo" : ""
          }`}
        >
          Mentorado
        </button>
      </div>
      {menuScheduling === "mentor" ? (
        <div className="schedulingCard__item">
          <div className="schedulingCard__item-option">
            <h4>Agendamentos</h4>
            <ProfileCard header="one" width="400px">
              {scheduling ? (
                scheduling.map((item) => (
                  <PeopleCard
                    name={item.mentor.name}
                    role={item.mentor.role}
                    image="http://localhost:8000/img/1649529388674-modelo09.png"
                  />
                  ))
              ) : (
                <p className="businessCard__load">
                  Loading <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </p>
              )}
            </ProfileCard>
          </div>
          <div className="schedulingCard__item-option">
            <h4>Minha agenda</h4>
            <ProfileCard header="two" width="30vw">
              <TableHour week={available.available[0]} />
            </ProfileCard>
          </div>
        </div>
      ) : (
        ""
      )}
      {menuScheduling === "mentorado" ? (
        <div className="schedulingCard__item">
          <div className="schedulingCard__item-option">
            <h4>Agendamentos</h4>
            <ProfileCard header="one" width="80vw">
              <PeopleCard
                name="Fulana"
                role="teste role"
                image="http://localhost:8000/img/1649529388674-modelo09.png"
              />
            </ProfileCard>
          </div>
        </div>
      ) : (
        ""
      )}
    </article>
  );
}
