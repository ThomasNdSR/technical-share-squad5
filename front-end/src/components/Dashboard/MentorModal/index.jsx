import { useState } from "react";
import { ModalProfileCard } from "./ModalProfileCard";
import { ModalSchedulingCard } from "./ModalSchedulingCard";
import "./styles.css";

export const MentorModal = ({
  id = "modal",
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

  return (
    <div id={id} className="mentor-modal-bg" onClick={handleOutsideClick}>
      <div className="mentor-modal-box">
        <ModalProfileCard
          name={name}
          role={role}
          image={image}
          skill={skill}
          project={project}
        />
        <ModalSchedulingCard
          schedule={schedule}
          setSchedule={setSchedule}
          available={available}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};
