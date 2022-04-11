import { Header } from "../../components/Header";
import {Spotlight} from "./Spotlight"
import {Presentation} from "./Presentation"
import "./style.css";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
      <div className="page-top">
      <Spotlight />
      </div>
      <Presentation />
      </main>
      
    </>
  );
};
