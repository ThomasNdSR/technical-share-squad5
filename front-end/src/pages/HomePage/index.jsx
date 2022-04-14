import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Spotlight } from "./Spotlight";
import { Presentation } from "./Presentation";
import { EndPage } from "./EndPage";
import "./style.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const [localData, setLocalData] = useState(() => {
    const userData = localStorage.getItem("@TechnicalShare:userData");

    if (userData) {
      return JSON.parse(userData);
    }

    return false;
  });

  useEffect(() => {
    if (localData !== false) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <Header page="public" />
      <main>
        <div className="page-color">
          <Spotlight />
          <Presentation />
          <EndPage />
        </div>
      </main>
    </>
  );
};
