import {AiOutlineDown} from "react-icons/ai"
import "./style.css";

export function PeopleCard({
  name,
  role,
  image,
}) {
  return (
    <article className="peopleCard">
      <div className="peopleCard_data">
      <figure className="header__photo">
         <img src={image} alt="" />
      </figure>
      <div className="peopleCard_descrition">
          <h4>{name}</h4>
          <p>{role}</p>
      </div>
      </div>
      <div className="peopleCard_option">
          <button className="peopleCard_option-item">ver detalhe <AiOutlineDown /></button>
          <button className="peopleCard_option-delete">cancelar</button>
      </div>
    </article>
  );
}