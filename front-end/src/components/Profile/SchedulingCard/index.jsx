import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { ProfileCard } from "../ProfileCard";
import { PeopleCard } from "../PeopleCard";
import { TableHour } from "../TableHour";
import { TableHourEdit } from "../TableHourEdit";
import "./style.css";

export function SchedulingCard({ available }) {
  const [menuScheduling, setMenuScheduling] = useState("mentor");
  const [scheduling, setScheduling] = useState([]);
  const [mentorScheduling, setMentorScheduling] = useState([]);
  const [editHour, setEditHour] = useState(false);
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
  const getMentorScheduling = async () => {
    await api
      .get(`user/appointment/mentor/${available._id}`)
      .then((res) => {
        setMentorScheduling(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getScheduling();
    getMentorScheduling();
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
              {mentorScheduling ? (
                mentorScheduling.map((item) => (
                  <PeopleCard
                    key={item._id}
                    name={item.user.name}
                    role={item.user.role}
                    image={
                      item.user.img === undefined
                        ? "https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
                        : `http://localhost:8000/img/${item.user.img.path.slice(
                            11
                          )}`
                    }
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
            <ProfileCard
              header="two"
              width="30vw"
              clickEdit={() => {
                setEditHour(!editHour);
              }}
            >
              {editHour ? (
                <TableHourEdit />
              ) : (
                <TableHour week={available.available[0]} />
              )}
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
              {scheduling ? (
                scheduling.map((item) => (
                  <PeopleCard
                    key={item._id}
                    name={item.mentor.name}
                    role={item.mentor.role}
                    image={
                      item.mentor.img === undefined
                        ? "https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
                        : `http://localhost:8000/img/${item.mentor.img.path.slice(
                            11
                          )}`
                    }
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
        </div>
      ) : (
        ""
      )}
    </article>
  );
}
