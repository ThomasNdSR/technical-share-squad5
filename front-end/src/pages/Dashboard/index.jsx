import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { SearchContainer } from "./SearchContainer";
import { Favorites } from "./Favorites";
import { MostAvailable } from "./MostAvailable";
import { FindMentors } from "./FindMentors";

export const Dashboard = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState("");

  useEffect(() => {
    getAllUsers();
    getUserProfile();
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
  const getUserProfile = async () => {
    await api
      .get("/user/624f249ed07fa608ca7e8a6b")
      .then((res) => {
        setUserProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header
        page="private"
        name={userProfile.name}
        image={
          userProfile.img === undefined
            ? "https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
            : `http://localhost:8000/img/${userProfile.img.path.slice(11)}`
        }
      />
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
