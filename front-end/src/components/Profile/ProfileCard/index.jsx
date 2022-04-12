import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import "./style.css";

export function ProfileCard(props,{
  header
}) {
  return (
    <section className="profileCard">
      <div className="profileCard_header">
         <button><AiOutlineLeft size={24}/></button> 
        <h3>Hoje</h3>
        <button><AiOutlineRight size={24}/></button> 
      </div>
      <div className="profileCard_header">
         <button><AiOutlineLeft size={24}/></button> 
        <h3>Hoje</h3>
        <button><AiOutlineRight size={24}/></button> 
      </div>
      <article className="profileCard_body">{props.children}</article>
    </section>
  );
}
