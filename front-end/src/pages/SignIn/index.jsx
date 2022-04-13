import { Header } from "../../components/Header";
import "./styles.css";
import login__ilustration from "../../assets/work.png";
import imagem__01 from "../../assets/01.svg";
import imagem__02 from "../../assets/02.svg";


export const SignIn = () => {
  return (
    <>
      <Header page="private" />
      <main className="flexbox__container">
        <div className="login__page__headline">
          <span className="headline">
            <h3>
              Faça parte de uma comunidade profissional de mentores e mentorados
              do <p>#SangueLaranja</p>
            </h3>
          </span>
          <figure className="login__ilustration">
            <img src={login__ilustration} alt="" />
          </figure>
        </div>
        <div className="login__component">
          <span className="greeting">
            <h2>Bem-vindo(a)</h2>
            <p>Faça login com a sua conta</p>
          </span>
          <form action="" method="post">
            <input
              placeholder="email@email.com"
              type="email"
              name="email"
              className="input__email"
            />

            <input
              placeholder="senha"
              type="password"
              name="password"
              className="input__senha"
            />
            <span className="naosei">
              <label className="lembrar-me" htmlFor="lembrar-me">
                Lembrar-me
                <input type="checkbox" name="lembrar-me" id="lembrar-me" />
              </label>
              <a href="" className="forgot__password">Esqueceu a senha?</a>
            </span>
            <input className="submit" type="submit" value="ENTRAR"></input>
          </form>

          <p className="first__access">
            Primeiro acesso?{" "}
            <a className="click__here" href="">
              Clique aqui!
            </a>
          </p>
        </div>
      </main>
    </>
  );
};
