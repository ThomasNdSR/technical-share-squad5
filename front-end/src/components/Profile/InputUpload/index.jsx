import { useState } from "react";
import { api } from "../../../services/api"

export function InputUpload({ name,id }) {
const [inputEdit, setInputEdit] = useState('');
const [feedbackInput, setFeedbackInput] = useState('');

const putInputEdit = async () => {
    if(name==="projetos"){
    await api
      .put(`/user/project/${id}`,{name:inputEdit})
      .then(() => {
        setFeedbackInput('Skills atualizadas com sucesso');
      })
      .catch((err) => {
        console.log(err);
      });
    }
    if(name==="Bio"){
        console.log(inputEdit)
    }
  };
  return (
    <div className="skillEdit">
      <label
        htmlFor="uploadProject"
        className="skillEdit_list--title"
      >{`Atualizar ${name}`}</label>
      <input id="uploadProject" onChange={(e)=>setInputEdit(e.target.value)} type="text" className="skillEdit_list--input" />

      <button onClick={()=>{
          putInputEdit ()
      }}>Salvar alterações</button>
      <p className="skillEdit_feedback">{feedbackInput}</p>
    </div>
  );
}
