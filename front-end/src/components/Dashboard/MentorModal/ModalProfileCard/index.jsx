import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./styles.css";

export const ModalProfileCard = ({ name, image, role, skill, project }) => {
  return (
    <div className="mentor-modal-box-info">
      <div className="modal-profile-card">
        <div className="modal-img-box">
          <img className="modal-img" src={image} alt={name} />
        </div>
        <div className="modal-profile-card-wrapper">
          <h3>{name}</h3>
          <h6>{role}</h6>
        </div>
      </div>

      <div className="modal-profile-exp-skills">
        <h5 className="mentor-exp-skills-heading">Projetos</h5>
        <ul>
          {project.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <h5 className="mentor-exp-skills-heading">Skills</h5>
        <ul>
          {skill.map((s) => (
            <li key={s._id}>{s.name}</li>
          ))}
        </ul>

        <div>
          <h5 className="mentor-exp-skills-heading">Acessível para</h5>
          <ul>
            <li>Deficientes auditivos</li>
          </ul>
        </div>

        <h5 className="mentor-exp-skills-heading">Redes</h5>
        <div className="mentor-social-media-list">
          <div id="github">
            <FiGithub size={30} color="var(--primary-02)" />
          </div>
          <div id="linkedin">
            <FiLinkedin size={30} color="var(--primary-02)" />
          </div>
        </div>
      </div>
    </div>
  );
};
