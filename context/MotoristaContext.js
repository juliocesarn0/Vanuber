import React, { createContext, useState } from "react";
import axios from "axios";

const MotoristaContext = createContext();

export const MotoristaProvider = ({ children }) => {
  const [motorista, setMotorista] = useState(null);

  const login = (data) => {
    setMotorista(data);
    console.log("Dados do motorista após login:", data);
  };

  const logout = () => {
    setMotorista(null);
  };

  const updateMotorista = async (data) => {
    if (!motorista || !motorista._id) {
      console.error("ID do motorista não está disponível para atualização");
      return;
    }

    const motoristaData = {
      ...motorista,
      ...data,
    };

    setMotorista(motoristaData);

    const baseUrl = `http://192.168.15.7:3000/api/motoristas/update/${motorista._id}`;

    console.log("Dados enviados para atualização:", motoristaData);

    try {
      const response = await axios.put(baseUrl, motoristaData);
      console.log("Dados do motorista atualizados com sucesso:", response.data);
      setMotorista(response.data); // Atualizar o contexto com os dados atualizados do motorista
    } catch (error) {
      console.error(
        "Erro ao atualizar dados do motorista:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <MotoristaContext.Provider
      value={{ motorista, login, logout, updateMotorista }}
    >
      {children}
    </MotoristaContext.Provider>
  );
};

export default MotoristaContext;
