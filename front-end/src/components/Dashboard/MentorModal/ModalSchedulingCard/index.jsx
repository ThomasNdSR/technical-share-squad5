import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { api } from "../../../../services/api";
import { ModalAvailable } from "../ModalAvailable";
import "./styles.css";

export const ModalSchedulingCard = ({
  schedule,
  setFeedBack,
  setSchedule,
  closeModal,
  available,
  idMentor,
}) => {
  const handleSchedule = () => {
    setSchedule((prevState) => !prevState);
  };
  const useId = "624f249ed07fa608ca7e8a6b";
  const [selectDay, setSelectDay] = useState();
  const [selectHour, setSelectHour] = useState();

  const dateSelect = () => {
    const data = new Date();
    const dayKey = new Date().getDay();
    let dayweek;
    if (selectDay) {
      dayweek = available[0].week[selectDay].weekday;
      if (dayKey > dayweek) {
        data.setDate(data.getDate() - (dayKey - dayweek));
      } else {
        data.setDate(data.getDate() + (dayweek - dayKey));
      }
    }
    const selectDate = {
      user: useId,
      date: new Date(data),
      time: `${selectHour}:00`,
      place: "Team",
      mentor: idMentor,
      status: 1,
    }
    return selectDate
  };
  const postAppointment = async () => {
    const data = dateSelect()
    await api
      .post(`/user/appointment/${useId}`, data)
      .then(() => {
        setFeedBack(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mentor-modal-box-scheduling">
      <div className="close-button">
        <button id="modal-close-button" onClick={closeModal}>
          <VscChromeClose size={30} color="var(--primary-01)" />
        </button>
      </div>
      <div className="scheduling-button-wrapper">
        <div className="scheduling-card">
          <h4>Agenda semanal</h4>
          <ModalAvailable
            weekData={available}
            day={selectDay}
            setDay={setSelectDay}
            hour={selectHour}
            setHour={setSelectHour}
          />
        </div>
        <button
          id="go-ahead-button"
          onClick={() => {
            
            postAppointment();
          }}
        >
          Agendar
        </button>
      </div>
    </div>
  );
};
