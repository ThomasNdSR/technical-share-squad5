export function InputUpload({ name }) {
  return (
    <form action="" className="skillEdit">
      <label
        htmlFor="uploadProject"
        className="skillEdit_list--title"
      >{`Atualizar ${name}`}</label>
      <input id="uploadProject" type="text" className="skillEdit_list--input" />

      <button>Salvar alterações</button>
      <p className="skillEdit_feedback">feedback</p>
    </form>
  );
}
