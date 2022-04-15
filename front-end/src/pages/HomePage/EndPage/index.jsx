import endPageImage from "../../../assets/endpage.png";
import img1 from "../../../assets/01.svg";
import img2 from "../../../assets/02.svg";
import "./style.css";

export const EndPage = () => {
  return (
    <div className="page">
      <section className="endPage">
        <div>
          <img
            src={img2}
            alt="decoração da pagina com ondas"
            className="endPage_decorative--waves"
          />
        </div>
        <div>
          <h3 id="sangue_laranja">
            Encontre o #sanguelaranja certo para te auxiliar com o seu problema
          </h3>
          <img
            className="endPage__illustration"
            src={endPageImage}
            alt="Ilustração de colaboradores"
          />
        </div>
        <div className="endPage_decorative_spots_container">
          <img
            src={img1}
            alt="decoração da pagina com pontos"
            className="endPage_decorative--spots"
          />
        </div>
      </section>
    </div>
  );
};
