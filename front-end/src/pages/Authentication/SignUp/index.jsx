import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../../services/api";

import { BiUserCircle, BiLockOpenAlt } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

export const SignUp = ({ toggleComponents }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    signUp(data);
  };

  const signUp = async (data) => {
    try {
      const response = await api.post("/user/create", data);

      toast.success("Cadastro realizado com sucesso!");

      toggleComponents();
    } catch (error) {
      toast.error("Ops... Algo deu errado!");

      console.log(error);
    }
  };

  return (
    <div className="login__component__container">
      <div className="login__component">
        <span className="greeting">
          <h2>Cadastre-se</h2>
          <p>Para começar a utilizar a plataforma</p>
        </span>

        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="form__input__wrapper">
            <BiUserCircle
              className="form_input_svg"
              size={30}
              color="var(--primary-02)"
            />
            <input
              className="form_input"
              placeholder="Nome"
              type="text"
              name="name"
              {...register("name", { required: true })}
            />
          </fieldset>

          {errors.email && (
            <span className="input__error">Campo obrigatório</span>
          )}

          <fieldset className="form__input__wrapper">
            <FiMail
              className="form_input_svg"
              size={30}
              color="var(--primary-02)"
            />
            <input
              className="form_input"
              placeholder="E-mail"
              type="email"
              name="email"
              {...register("email", { required: true })}
            />
          </fieldset>

          {errors.email && (
            <span className="input__error">Campo obrigatório</span>
          )}

          <fieldset className="form__input__wrapper">
            <BiLockOpenAlt
              className="form_input_svg"
              size={30}
              color="var(--primary-02)"
            />
            <input
              className="form_input"
              placeholder="Senha"
              type="password"
              name="password"
              {...register("password", { required: true })}
            />
          </fieldset>

          {errors.password && (
            <span className="input__error">Campo obrigatório</span>
          )}

          <span className="naosei">
            <label className="lembrar-me" htmlFor="lembrar-me">
              Lembrar-me
              <input type="checkbox" name="lembrar-me" id="lembrar-me" />
            </label>
            <p className="forgot__password">Esqueceu a senha?</p>
          </span>
          <input className="submit" type="submit" value="CADASTRAR" />
        </form>

        <p className="first__access">
          Já possui uma conta?{" "}
          <button className="click__here" onClick={toggleComponents}>
            Faça o login
          </button>
        </p>
      </div>
    </div>
  );
};
