import { Header } from "../../components/Header";
import {Spotlight} from "./Spotlight"
import {Presentation} from "./Presentation"
import {EndPage} from "./EndPage"
import "./style.css";

export const HomePage = () => {
  return (
    <>
      <Header />
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
