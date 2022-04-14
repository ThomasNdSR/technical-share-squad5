import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../../services/api";
import "./styles.css";

export const SignUp = () => {
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
      console.log(response);
    } catch (error) {
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
          <input
            className="input__name"
            placeholder="Nome"
            type="text"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.email && (
            <span className="input__error">Campo obrigatório</span>
          )}

          <input
            className="input__email"
            placeholder="Email"
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="input__error">Campo obrigatório</span>
          )}
          <input
            className="input__senha"
            placeholder="Senha"
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
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
          <a className="click__here" href="">
            Faça o login
          </a>
        </p>
      </div>
    </div>
  );
};
