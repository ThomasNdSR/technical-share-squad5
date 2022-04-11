import { Header } from "../../components/Header";
import { SearchContainer } from "./SearchContainer";
import { Favorites } from "./Favorites";
import { MostAvailable } from "./MostAvailable";
import { FindMentors } from "./FindMentors";

export const Dashboard = () => {
  return (
    <div className="page">
      <Header />
      <SearchContainer />
      {/* <Favorites /> */}
      <MostAvailable />
      <FindMentors />
    </div>
  );
};
