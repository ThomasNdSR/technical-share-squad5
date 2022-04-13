import { createContext, useContext } from "react";
import { useState } from "react";
import {api}  from "../services/api";

export const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getMentors = async () => {
    try {
      const response = await api.get("/user");
      const data = response.data;

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DatabaseContext.Provider value={{ users, getMentors }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => useContext(DatabaseContext);
