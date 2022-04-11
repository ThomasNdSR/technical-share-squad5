import "./styles.css";

export const MentorModal = ({ name, role, image }) => {
  return (
    <div className="mentor-modal-bg">
      <div className="mentor-modal-box">
        <div className="mentor-modal-box-info">
          {/* modal profile card */}
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
            <p>Orange Juice, Programa de Formação</p>
            <h5 className="mentor-exp-skills-heading">Skills</h5>
            <p>Javascript, React JS</p>
            <h5 className="mentor-exp-skills-heading">Acessível para</h5>
            <p>Deficientes auditivos</p>
            <h5 className="mentor-exp-skills-heading">Redes</h5>
            <p>GitHub, LinkedIn</p>
          </div>
          {/* end modal profile card */}
        </div>
        <div className="mentor-modal-box-scheduling"></div>
      </div>
    </div>
  );
};
