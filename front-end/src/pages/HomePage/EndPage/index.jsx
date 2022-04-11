import endPageImage from "../../../assets/endpage.png"
import "./style.css";

export const EndPage = () => {
  return (
    <div className="page">
      <section className="endPage">
      <h4>Encontre o #Sanguelaranja certo para te auxiliar com o seu problema</h4>
      <img src={endPageImage} alt="Ilustração de colaboradores" />
      </section>
    </div>
  );
};