import { useState } from "react";
import { Header } from "../../components/Header";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import login__ilustration from "../../assets/work.png";
// import imagem__01 from "../../assets/01.svg";
// import imagem__02 from "../../assets/02.svg";
import "./styles.css";

export const Authentication = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const toggleComponents = () => {
    setIsRegistered((prevState) => !prevState);
  };

  return (
    <>
      <Header page="private" />
      <main className="flexbox__container">
        <div className="login__page__headline">
          <div className="headline">
            <h3>
              Faça parte de uma comunidade profissional de mentores e mentorados
              do <p>#SangueLaranja</p>
            </h3>
          </div>
          <figure className="login__ilustration">
            <img src={login__ilustration} alt="" />
          </figure>
        </div>
        {isRegistered ? (
          <SignIn toggleComponents={toggleComponents} />
        ) : (
          <SignUp toggleComponents={toggleComponents} />
        )}
      </main>
    </>
  );
};
