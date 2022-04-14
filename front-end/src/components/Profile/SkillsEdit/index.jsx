import React, { useState } from "react";
import { api } from "../../../services/api";
import "./style.css";

export function SkillsEdit({ skills, id,setUserProfile,userProfile }) {
  const [checkedSkill, setCheckedSkill] = useState([]);
  const [feedbackSkill, setFeedbackSkill] = useState('');

  const handleCheck = (event) => {
    var updatedList = [...checkedSkill];
    if (event.target.checked) {
      updatedList = [...checkedSkill, event.target.value];
    } else {
      updatedList.splice(checkedSkill.indexOf(event.target.value), 1);
    }
    setCheckedSkill(updatedList);
  };

  const UpdateSkill = async () => {
    await api.put(`/user/skill/${id}`, checkedSkill).then((res)=>{
      userProfile.skill=res.data.skill
      setUserProfile(userProfile)
      setFeedbackSkill('Skills atualizadas com sucesso')
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <>
      <article className="skillEdit">
        <p className="skillEdit_feedback">{feedbackSkill}</p>
        <button
          onClick={() => {
            UpdateSkill();
          }}
        >
          Salvar alterações
        </button>
        <h6 className="skillEdit_list--title">Selecione suas Skills:</h6>
        <div className="skillEdit_list--group">
          {skills.map((item, index) => (
            <div key={index}>
              <input
                id={item.name}
                value={item._id}
                type="checkbox"
                onChange={handleCheck}
              />
              <label htmlFor={item.name} className="skill_list--item">
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
