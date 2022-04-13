import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { SearchContainer } from "./SearchContainer";
import { Favorites } from "./Favorites";
import { MostAvailable } from "./MostAvailable";
import { FindMentors } from "./FindMentors";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await api.get("/user");
      const data = response.data;

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header page="private" />
      <SearchContainer
        users={users}
        setUsers={setUsers}
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
      />
      {/* <Favorites /> */}
      {/* <MostAvailable /> */}
      <FindMentors users={users} filteredUsers={filteredUsers} />
    </div>
  );
};
