import { ModalProfileCard } from "./ModalProfileCard";
import "./styles.css";
import { VscChromeClose } from "react-icons/vsc";

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

        <div className="mentor-modal-box-scheduling">
          <div className="close-button">
            <button id="modal-close-button" onClick={closeModal}>
              <VscChromeClose size={30} color="var(--primary-01)" />
            </button>
          </div>
          <div className="scheduling-button-wrapper">
            <div className="scheduling-card">
              {available.length > 0 ? "disponível" : "não disponível"}
            </div>
            <button id="go-ahead-button">Prosseguir</button>
          </div>
        </div>
      </div>
    </div>
  );
};
