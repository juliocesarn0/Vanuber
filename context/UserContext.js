import React, { createContext, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (ddd, numero) => {
    try {
      console.log("Enviando dados de login:", { ddd, numero });
      const response = await axios.post(
        "http://192.168.15.7:3000/api/users/check",
        {
          ddd,
          numero,
        }
      );
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
