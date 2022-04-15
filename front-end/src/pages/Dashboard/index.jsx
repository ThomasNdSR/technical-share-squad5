import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { SearchContainer } from "./SearchContainer";
import { FindMentors } from "./FindMentors";

export const Dashboard = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState("");

  const [userProfile, setUserProfile] = useState([]);
  const [localData, setLocalData] = useState(() => {
    const userData = localStorage.getItem("@TechnicalShare:userData");

    if (userData) {
      return JSON.parse(userData);
    }

    return false;
  });

  useEffect(() => {
    getMentors();
    getUserProfile();

    if (localData === false) {
      navigate("/auth");
      toast.error("Ops... Acesso restrito");
    }
  }, []);

  const getMentors = async () => {
    try {
      const response = await api.get("/user");
      const data = response.data;
      const mentors = data.filter((user) => user.role !== undefined);

      setUsers(mentors);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfile = async () => {
    await api
      .get(`/user/${localData.id}`)
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
      <FindMentors
        users={users}
        filteredUsers={filteredUsers}
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
    </div>
  );
};
