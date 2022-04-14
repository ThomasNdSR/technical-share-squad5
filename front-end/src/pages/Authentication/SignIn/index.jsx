import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../../services/api";
import "./styles.css";

export const SignIn = ({ toggleComponents }) => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
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
    signIn(data);
  };

  const signIn = async (data) => {
    try {
      const response = await api.post("/user", data);
      const userData = response.data;

      toast.success("Login realizado com sucesso!");

      localStorage.setItem(
        "@TechnicalShare:userData",
        JSON.stringify(userData)
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops... Algo deu errado!");

      console.log(error);
    }
  };

  return (
    <div className="login__component__container">
      <div className="login__component">
        <span className="greeting">
          <h2>Bem-vindo(a)</h2>
          <p>Faça login com a sua conta</p>
        </span>

        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input__email"
            placeholder="email@email.com"
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="input__error">Campo obrigatório</span>
          )}
          <input
            className="input__senha"
            placeholder="******"
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
          <input className="submit" type="submit" value="ENVIAR" />
        </form>

        <p className="first__access">
          Primeiro acesso?{" "}
          <button className="click__here" onClick={toggleComponents}>
            Clique aqui!
          </button>
        </p>
      </div>
    </div>
  );
};
