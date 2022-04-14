import { useState } from "react";
import { ModalProfileCard } from "./ModalProfileCard";
import { ModalSchedulingCard } from "./ModalSchedulingCard";
import imageFeedback from "../../../assets/undraw_Confirmed_re_sef7 1.png";
import "./styles.css";

export const MentorModal = ({
  id = "modal",
  idMentor,
  name,
  role,
  image,
  skill,
  project,
  available,
  closeModal = () => {},
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) closeModal();
  };

  const [schedule, setSchedule] = useState(false);
  const [feedback, setFeedBack] = useState(false);

  return (
    <div id={id} className="mentor-modal-bg" onClick={handleOutsideClick}>
      <div className="mentor-modal-box">
        {feedback ? (
          <div className="mentor-modal-feedback">
            <h3>Mentoria confirmada!</h3>
            <p>
              Os detalhes do agendamento foram enviados para o seu e-mail.
            </p>
            <img
              src={imageFeedback}
              alt="Ilustração feedback de confirmação de agendamento"
            />
          </div>
        ) : (
          <>
            <ModalProfileCard
              name={name}
              role={role}
              image={image}
              skill={skill}
              project={project}
            />
            <ModalSchedulingCard
              setFeedBack={setFeedBack}
              schedule={schedule}
              setSchedule={setSchedule}
              available={available}
              closeModal={closeModal}
              idMentor={idMentor}
            />
          </>
        )}
      </div>
    </div>
  );
};
