import { useState } from "react";
import { api } from "../../../services/api";

export function InputUpload({ name, id, userProfile, setUserProfile }) {
  const [inputEdit, setInputEdit] = useState("");
  const [feedbackInput, setFeedbackInput] = useState("");

  const putInputEdit = async () => {
    if (name === "projetos") {
      await api
        .put(`/user/project/${id}`, { name: inputEdit })
        .then(() => {
          userProfile.project.push(inputEdit);
          setUserProfile(userProfile);
          setFeedbackInput("Projetos atualizadas com sucesso");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (name === "Bio") {
      await api
        .put(`/user/bio/${id}`, { bio: inputEdit })
        .then(() => {
          userProfile.bio = inputEdit;
          setUserProfile(userProfile);
          setFeedbackInput("Bio atualizadas com sucesso");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (name === "Role") {
      await api
        .put(`/user/role/${id}`, { role: inputEdit })
        .then(() => {
          userProfile.role = inputEdit;
          setUserProfile(userProfile);
          setFeedbackInput("Role atualizadas com sucesso");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="skillEdit">
      <label
        htmlFor="uploadProject"
        className="skillEdit_list--title"
      >{`Atualizar ${name}`}</label>
      <input
        id="uploadProject"
        onChange={(e) => setInputEdit(e.target.value)}
        type="text"
        className="skillEdit_list--input"
      />
      <p className="skillEdit_feedback">{feedbackInput}</p>
      <button
        onClick={() => {
          putInputEdit();
        }}
      >
        Salvar alterações
      </button>
    </div>
  );
}
