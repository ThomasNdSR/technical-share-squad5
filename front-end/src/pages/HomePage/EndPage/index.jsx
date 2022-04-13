import endPageImage from "../../../assets/endpage.png";
import img1 from "../../../assets/01.svg";
import img2 from "../../../assets/02.svg";
import "./style.css";

export const EndPage = () => {
  return (
    <div className="page">
      <section className="endPage">
        <img
          src={img1}
          alt="decoração da pagina com pontos"
          className="endPage_decorative--spots"
        />
        <h3>
          Encontre o #Sanguelaranja certo para te auxiliar com o seu problema
        </h3>
        <img
          className="endPage__illustration"
          src={endPageImage}
          alt="Ilustração de colaboradores"
        />
        <img
          src={img2}
          alt="decoração da pagina com ondas"
          className="endPage_decorative--waves"
        />
      </section>
    </div>
  );
};
